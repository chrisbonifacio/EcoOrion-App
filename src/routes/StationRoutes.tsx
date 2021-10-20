import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';

import {
  CreateStation,
  DashboardStation,
  DetailStation,
  SettingStation,
} from '../views/StationScreen';

export const StationRoutes: FunctionComponent = () => {
  const StackedStation = createStackNavigator();

  return (
    <StackedStation.Navigator
      initialRouteName="DashboardStation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackedStation.Screen
        name="DashboardStation"
        component={DashboardStation}
      />
      <StackedStation.Screen name="CreateStation" component={CreateStation} />
      <StackedStation.Screen name="DetailStation" component={DetailStation} />
      <StackedStation.Screen name="SettingStation" component={SettingStation} />
    </StackedStation.Navigator>
  );
};
