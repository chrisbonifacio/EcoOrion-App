import React from 'react';
import {
  Root,
  Container,
  Header,
  Text,
  Content,
  Title,
  Body,
  Left,
  Button,
  Icon,
  Right,
} from 'native-base';

export const AppLayout = ({navigation, children}) => {
  console.log(navigation);
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
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Content padder>{children}</Content>
      </Container>
    </Root>
  );
};
