import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';

import { HomeScreen } from '../views/AppScreen';

export const AppRoutes: FunctionComponent = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
