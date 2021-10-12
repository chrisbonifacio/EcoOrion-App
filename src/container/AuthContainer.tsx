import { Box, Heading, VStack } from 'native-base';
import React, { FunctionComponent } from 'react';

export const AuthContainer: FunctionComponent = ({ children }) => {
  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        Sign In
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        {children}
      </VStack>
    </Box>
  );
};

export default AuthContainer;
