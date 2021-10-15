import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, Spacer, Text, VStack } from 'native-base';
import React, { FunctionComponent } from 'react';

import { BaseButton } from '../../components/Button';
import { AppContainer } from '../../container/AppContainer';
import { AppDrawerParamList } from '../../types/AppRouteType';

type homeScreenProp = DrawerNavigationProp<AppDrawerParamList, 'Home'>;

export const HomeScreen: FunctionComponent = () => {
  const { navigate } = useNavigation<homeScreenProp>();
  return (
    <AppContainer>
      <VStack flex={1}>
        <Center
          my={8}
          mx={4}
          py={8}
          px={8}
          bgColor="primaryGreen"
          borderRadius="xl"
        >
          <Text bold color="white" fontSize="2xl" textAlign="center" mb={6}>
            Welcome to Eco-Orion 1m&#178; Farmer&apos;s app
          </Text>
          <Text bold color="white" fontSize="xl" textAlign="justify">
            Growing your own food from home.
          </Text>
        </Center>

        <Box my={4} mx={4}>
          <BaseButton
            title="Stations"
            onPress={() => {
              // navigate('Station');
            }}
          />
        </Box>
        <Box my={4} mx={4}>
          <BaseButton
            title="Eco-Orion Website"
            onPress={() => {
              navigate('Web');
            }}
          />
        </Box>
        <Box my={4} mx={4}>
          <BaseButton
            title="Profile Settings"
            onPress={() => {
              // navigate('Setting');
            }}
          />
        </Box>
      </VStack>
    </AppContainer>
  );
};
