import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

interface BaseContainerProps {
  children: ReactNode;
}
export const BaseContainer: FunctionComponent<BaseContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="bgGreen">
      {children}
    </Box>
  );
};
