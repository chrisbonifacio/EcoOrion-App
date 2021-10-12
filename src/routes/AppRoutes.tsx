import { Box, Spacer, Text, VStack } from 'native-base';
import React, { FunctionComponent } from 'react';

// import { BaseButton } from '../components/Button';
import { AppContainer } from '../container';

export const HomeScreen: FunctionComponent = () => {
  return (
    <AppContainer>
      <VStack flex={1}>
        <Box
          border={1}
          borderRadius="lg"
          alignItems="center"
          alignSelf="center"
          my={8}
          mx={4}
          bgColor="default.primary"
          shadow={9}
        >
          <Box px={8} my={16}>
            <Text bold color="white" fontSize="xl">
              Welcome to Eco-Orion 1m&#178; Farmer&apos;s app
            </Text>
          </Box>
          <Box px={8} mb={16}>
            <Text bold color="white" fontSize="3xl">
              Growing your own food from home.
            </Text>
          </Box>
        </Box>

        <Spacer flex={1} />
        {/* <Box my={4} mx={4}>
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
        </Box> */}
      </VStack>
    </AppContainer>
  );
};
