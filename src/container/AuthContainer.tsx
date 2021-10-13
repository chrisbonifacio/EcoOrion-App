import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';
// import { AppHeader } from '../../component/Header';

interface AuthContainerProps {
  children: ReactNode;
}
export const AuthContainer: FunctionComponent<AuthContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="default.secondary">
      {children}
    </Box>
  );
};
