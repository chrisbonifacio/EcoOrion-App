import {
  Button,
  HamburgerIcon,
  Heading,
  HStack,
  InfoOutlineIcon,
} from 'native-base';
import React from 'react';

export const AppHeader = ({navigation, title}) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      bgColor="green.900">
      <Button
        variant="ghost"
        color="white"
        onPress={() => {
          navigation.openDrawer();
        }}>
        <HamburgerIcon color="white" />
      </Button>
      <Heading color="white">{title ? title : 'Header'}</Heading>
      <Button
        variant="ghost"
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <InfoOutlineIcon color="white" />
      </Button>
    </HStack>
  );
};
