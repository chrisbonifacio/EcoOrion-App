import React from 'react';
import {Body, Text, Card, CardItem} from 'native-base';
import {AppLayout} from '../../container/App';

const SettingScreen = ({navigation}) => {
  return (
    <AppLayout navigation={navigation}>
      <Card>
        <CardItem>
          <Body>
            <Text>Chat Settings to talk some awesome people!</Text>
          </Body>
        </CardItem>
      </Card>
    </AppLayout>
  );
};
export default SettingScreen;
