import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';

import { AppDrawerParamList } from '../types/AppRouteType';
import { HomeScreen, ProfileScreen, WebScreen } from '../views/AppScreen';

export const AppRoutes: FunctionComponent = () => {
  const Drawer = createDrawerNavigator<AppDrawerParamList>();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Web" component={WebScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
