/* eslint-disable react/jsx-props-no-spreading */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Box, Button } from 'native-base';
import React from 'react';

export const AppDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <DrawerItemList {...props}>
        <DrawerItem
          label="Help"
          onPress={() => props.navigation.navigate('SomeScreen')}
        />
      </DrawerItemList>
      <Box>123</Box>
    </DrawerContentScrollView>
  );
};
