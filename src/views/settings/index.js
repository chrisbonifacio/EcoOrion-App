import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';
import AppLayout from '../../container/App';

const SettingScreen = ({navigation}) => {
  return (
    <AppLayout navigation={navigation}>
      <Card>
        <CardItem>
          <Body>
            <Text>Chat App to talk some awesome people!</Text>
          </Body>
        </CardItem>
      </Card>
    </AppLayout>
  );
};
export default SettingScreen;
