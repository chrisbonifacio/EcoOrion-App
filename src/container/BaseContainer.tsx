import { Box, ScrollView, VStack } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

interface BaseContainerProps {
  children: ReactNode;
}
export const BaseContainer: FunctionComponent<BaseContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="bgGreen">
      <Box flex={1} w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};
