import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import {HomeScreen} from '../view/HomeScreen';
import {SettingScreen} from '../view/SettingScreen';
import {WebScreen} from '../view/WebScreen';
import {StationRoutes} from './StationRoutes';

export const RouteContainer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* <Drawer.Navigator initialRouteName="Home" drawerContent={AppDrawer}> */}
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
      <Drawer.Screen name="Station" component={StationRoutes} />
      <Drawer.Screen name="Web" component={WebScreen} />
    </Drawer.Navigator>
  );
};
