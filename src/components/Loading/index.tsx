import { Box, Center, Heading, HStack, Spinner } from 'native-base';
import React, { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';

export const LoadingComponent: FunctionComponent = () => {
  return (
    <Box height={Dimensions.get('window').height} bgColor="bgHeader">
      <Center flex={1} px="3">
        <HStack space={2} alignItems="center">
          <Spinner
            size="lg"
            accessibilityLabel="Loading posts"
            color="primaryGreen"
          />
          <Heading color="white" fontSize="md" bold>
            Loading
          </Heading>
        </HStack>
      </Center>
    </Box>
  );
};
