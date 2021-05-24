import React from 'react';
import {Card, CardItem, Body, Text, Button} from 'native-base';
import {AppLayout} from '../container/App';
const HomeScreen = ({navigation}) => {
  return (
    <AppLayout navigation={navigation}>
      <Card>
        <CardItem>
          <Body>
            <Text>Chat App to talk some awesome people!</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        full
        rounded
        dark
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Setting')}>
        <Text>Chat With People</Text>
      </Button>
      <Button
        full
        rounded
        primary
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Setting')}>
        <Text>Goto Profiles</Text>
      </Button>
    </AppLayout>
  );
};

export default HomeScreen;
