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
      <ScrollView flex={1}>
        <Box flex={1} w="90%" mx="auto" my={4}>
          {children}
        </Box>
      </ScrollView>
    </Box>
  );
};
