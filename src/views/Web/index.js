import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Root,
  Title,
} from 'native-base';
import React from 'react';
import {WebView} from 'react-native-webview';
export const WebScreen = ({title, navigation}) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{title ? title : 'Header'}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      {/* <Content style={{padding: 10}}> */}
      <WebView source={{uri: 'https://ecoorion.com.my/'}} />
      {/* </Content> */}
    </Container>
  );
};
