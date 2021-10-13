import { Box, ScrollView } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

interface BaseContainerProps {
  children: ReactNode;
}
export const BaseContainer: FunctionComponent<BaseContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="bgGreen">
      <ScrollView>
        <Box w="90%" mx="auto" py="4">
          {children}
        </Box>
      </ScrollView>
    </Box>
  );
};
