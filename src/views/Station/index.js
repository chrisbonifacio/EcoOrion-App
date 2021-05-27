import {createStackNavigator} from '@react-navigation/stack';
import {Body, Button, Card, CardItem, Container, Text} from 'native-base';
import React from 'react';

import {StationCreate} from './create';
import {StationDashboard} from './dashboard';
import {StationDetail} from './detail';
import {StationRoot} from './root';
export const StationScreen = ({navigation}) => {
  const StackedStation = createStackNavigator();

  return (
    // <AppLayout navigation={navigation} title={'Station Dashboard'}>
    <StackedStation.Navigator initialRouteName="StationRoot">
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
