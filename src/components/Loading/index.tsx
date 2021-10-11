import { Box, Center, Heading, HStack, Spinner } from 'native-base';
import React, { FunctionComponent } from 'react';

export const LoadingComponent: FunctionComponent = () => {
  return (
    <Box flex={1}>
      <Center flex={1} px="3">
        <HStack space={2} alignItems="center">
          <Spinner size="lg" accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </Center>
    </Box>
  );
};
