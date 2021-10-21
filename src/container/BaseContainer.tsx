import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

import { LoadingCheck } from '../hooks/LoadingCheck';

interface BaseContainerProps {
  children: ReactNode;
}
export const BaseContainer: FunctionComponent<BaseContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="bgGreen">
      <LoadingCheck>{children}</LoadingCheck>
    </Box>
  );
};
