import {Body, Button, Card, CardItem, Text} from 'native-base';
import React from 'react';

import {AppLayout} from '../container/App';
export const HomeScreen = ({navigation}) => {
  return (
    <AppLayout navigation={navigation} title={'Home'}>
      <Card>
        <CardItem>
          <Body>
            <Text>Welcome to Eco-Orion 1m2 Farmer's app</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        full
        rounded
        dark
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Station')}>
        <Text>Station</Text>
      </Button>
      <Button
        full
        rounded
        primary
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Setting')}>
        <Text>Go to Settings</Text>
      </Button>
    </AppLayout>
  );
};
