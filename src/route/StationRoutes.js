import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  StationCreate,
  StationDashboard,
  StationDetail,
  StationRoot,
} from '../view/StationScreen';

export const StationRoutes = () => {
  const StackedStation = createStackNavigator();

  return (
    <StackedStation.Navigator
      initialRouteName="StationRoot"
      screenOptions={{
        headerShown: false,
      }}>
      <StackedStation.Screen name="StationRoot" component={StationRoot} />
      <StackedStation.Screen name="StationCreate" component={StationCreate} />
      <StackedStation.Screen
        name="StationDashboard"
        component={StationDashboard}
      />
      <StackedStation.Screen name="StationDetail" component={StationDetail} />
    </StackedStation.Navigator>
    // </AppLayout>
  );
};
