import {Box, Spacer, Text, VStack} from 'native-base';
import React from 'react';

import {DefaultButton} from '../../component/Button';
import {AppContainer} from '../../container/App';
export const HomeScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation} title="Home">
      <VStack flex={1}>
        <Box
          border={1}
          borderRadius="lg"
          alignItems="center"
          alignSelf="center"
          my={8}
          mx={4}
          bgColor="green.800"
          shadow={9}>
          <Box px={8} my={16}>
            <Text bold color="white" fontSize="xl">
              Welcome to Eco-Orion 1m2 Farmer's app
            </Text>
          </Box>
        </Box>

        <Spacer flex={1} />
        <Box my={4} mx={4}>
          <DefaultButton
            title="Stations"
            triggerFunction={() => navigation.navigate('Station')}
          />
          <DefaultButton
            title="Eco-Orion Website"
            triggerFunction={() => navigation.navigate('Web')}
          />
          <DefaultButton
            title="Profile Settings"
            triggerFunction={() => navigation.navigate('Setting')}
          />
        </Box>
      </VStack>
    </AppContainer>
  );
};
