import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from 'aws-amplify';
import React, {useEffect, useState} from 'react';

import {getProfile} from '../api/index';
import {RouteContainer} from '../route';
import {ProfileRegistration} from '../view/ProfileScreen/Registration';
export const ProfileCreationCheck = ({children}) => {
  const [profile, updateProfile] = useState({});
  const [loaded, updateLoaded] = useState(false);

  useEffect(() => {
    const getProfileFunction = async email => {
      const user = await Auth.currentAuthenticatedUser();
      const res = await getProfile(user.attributes.email);
      console.log()
      updateProfile(prev => {
        return {...prev, ...res.data.getProfile};
      });
      updateLoaded(true);
    };
    getProfileFunction();
  }, []);

  const Stack = createStackNavigator();
  return (
    <>
      {loaded && profile && Object.keys(profile).length === 0 ? (
        <Stack.Navigator>
          <Stack.Screen name="Profile Registration">
            {props => (
              <ProfileRegistration
                {...props}
                profile={profile}
                updateProfile={updateProfile}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        <RouteContainer />
      )}
    </>
  );
};

export default ProfileCreationCheck;
