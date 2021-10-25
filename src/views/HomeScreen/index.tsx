import { useNavigation } from '@react-navigation/native';
import { Box, Center, Text, VStack } from 'native-base';
import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';

import { BaseButton } from '../../components/Button';
import { AppContainer } from '../../container/AppContainer';
import { setLoading } from '../../redux/slice/appslice';
import { AppDrawerParamList } from '../../types/AppRouteType';

export const HomeScreen: FunctionComponent = () => {
  const { navigate } = useNavigation<AppDrawerParamList>();
  const dispatch = useDispatch();
  return (
    <AppContainer>
      <Box w="90%" mx="auto" my={4} flex={1} flexGrow={1}>
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
                dispatch(setLoading());
                navigate('Station', { screen: 'DashboardStation' });
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
                dispatch(setLoading());
                navigate('Profile');
              }}
            />
          </Box>
        </VStack>
      </Box>
    </AppContainer>
  );
};
