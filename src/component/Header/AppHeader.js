import {Auth} from 'aws-amplify';
import {Button, HamburgerIcon, Heading, HStack, Icon} from 'native-base';
import React from 'react';
import {G, Path} from 'react-native-svg';

export const AppHeader = ({navigation, title}) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      bgColor="default.bglight">
      <Button
        variant="ghost"
        color="default.primary"
        onPress={() => {
          navigation.openDrawer();
        }}>
        <HamburgerIcon color="default.primary" />
      </Button>
      <Heading color="default.primary">{title ? title : 'Header'}</Heading>
      <Button
        variant="ghost"
        onPress={() => {
          Auth.signOut().catch(err => {
            console.log('err: ', err);
          });
        }}>
        <Icon viewBox="0 0 350 350">
          <G strokeMiterlimit={10} fill="#80A241">
            <Path d="M140.501 135.494c-35.383 0-64.169-28.786-64.169-64.17 0-35.383 28.786-64.168 64.17-64.168S204.67 35.94 204.67 71.325c0 35.383-28.786 64.169-64.169 64.169zm0-102.508c-21.14 0-38.339 17.199-38.339 38.339s17.2 38.339 38.34 38.339 38.338-17.2 38.338-38.34-17.199-38.338-38.339-38.338zM50.406 339.256c-7.133 0-12.915-5.783-12.915-12.915v-91.306c0-41.106 33.443-74.549 74.55-74.549h56.925c25.535 0 49.04 12.934 62.874 34.594a74.251 74.251 0 018.996 20.188c1.904 6.87-2.13 13.989-9.004 15.889-6.863 1.915-13.989-2.125-15.889-9.004a48.489 48.489 0 00-5.878-13.166c-9.063-14.195-24.428-22.667-41.1-22.667H112.04c-26.863 0-48.719 21.856-48.719 48.719v91.302c0 7.132-5.782 12.915-12.915 12.915zM230.6 339.256c-7.133 0-12.915-5.783-12.915-12.915v-8.251c0-7.133 5.782-12.915 12.915-12.915s12.915 5.782 12.915 12.915v8.25c0 7.133-5.786 12.916-12.915 12.916z" />
            <Path d="M305.138 260.81l-31.42-31.42c-5.045-5.045-13.218-5.045-18.262 0-5.045 5.04-5.045 13.22 0 18.261l9.372 9.373H140.501c-7.133 0-12.915 5.782-12.915 12.915s5.782 12.915 12.915 12.915h124.327l-9.376 9.376c-5.044 5.044-5.044 13.221 0 18.262 2.524 2.524 5.826 3.782 9.133 3.782s6.612-1.262 9.132-3.782l31.42-31.424c5.045-5.04 5.045-13.218 0-18.258z" />
          </G>
        </Icon>
      </Button>
    </HStack>
  );
};
