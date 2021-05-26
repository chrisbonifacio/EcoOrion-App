import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Auth} from 'aws-amplify';
import React, {useEffect, useState} from 'react';

import {getProfile} from '../api/index';
import {AppDrawer} from '../component/Drawer';
import HomeScreen from '../views/HomeScreen';
import {ProfileRegistration} from '../views/profile/Registration';
import SettingScreen from '../views/settings';

export const FirstTimeRegistration = ({children}) => {
  const [profile, updateProfile] = useState({});

  useEffect(() => {
    const getProfileFunction = async email => {
      const user = await Auth.currentAuthenticatedUser();
      const res = await getProfile(user.attributes.email);
      updateProfile(prev => {
        return {...prev, ...res.data.getProfile};
      });
    };
    getProfileFunction();
  }, []);

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <>
      {profile && Object.keys(profile).length === 0 ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Profile Registration"
            component={ProfileRegistration}
          />
        </Stack.Navigator>
      ) : (
        <Drawer.Navigator initialRouteName="Home" drawerContent={AppDrawer}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
      )}
    </>
  );
};
