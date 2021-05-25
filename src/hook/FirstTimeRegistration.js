import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';

import {AppDrawer} from '../component/Drawer';
import HomeScreen from '../views/HomeScreen';
import {ProfileRegistration} from '../views/profile/Registration';
import SettingScreen from '../views/settings';

export const FirstTimeRegistration = ({children}) => {
  const [profile, updateProfile] = useState({});

  useEffect(() => {}, []);

  if (profile && Object.keys(profile).length === 0) {
    const Stack = createStackNavigator();
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen
            name="ProfileRegistration"
            component={ProfileRegistration}
          />
        </Stack.Navigator>
      </>
    );
  }

  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator initialRouteName="Setting" drawerContent={AppDrawer}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </>
  );
};
