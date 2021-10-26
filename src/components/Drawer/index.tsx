/* eslint-disable react/jsx-props-no-spreading */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Box } from 'native-base';
import React, { FunctionComponent } from 'react';

export const AppDrawer: FunctionComponent<DrawerContentComponentProps> = (
  props: DrawerContentComponentProps,
) => {
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
