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

export const AppLayout = ({navigation, children, title}) => {
  return (
    <Root>
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
        <Content padder>{children}</Content>
      </Container>
    </Root>
  );
};
