/* eslint-disable react/jsx-props-no-spreading */
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';

import { AppDrawer } from '../components/Drawer';
import { AppScreenParamList } from '../types/AppRouteType';
import { HomeScreen, ProfileScreen, WebScreen } from '../views/AppScreen';
import { StationRoutes } from './StationRoutes';

export const AppRoutes: FunctionComponent = () => {
  const Drawer = createDrawerNavigator<AppScreenParamList>();
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <AppDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Web" component={WebScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Station" component={StationRoutes} />
    </Drawer.Navigator>
  );
};
