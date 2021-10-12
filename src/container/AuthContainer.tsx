import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';
// import { AppHeader } from '../../component/Header';

interface AppContainerProps {
  children: ReactNode;
}
export const AppContainer: FunctionComponent<AppContainerProps> = ({
  children,
}) => {
  return (
    <Box flex={1} safeArea bgColor="default.bglight">
      {/* <AppHeader navigation={navigation} title={title} /> */}
      <Box flex={1} bgColor="default.secondary">
        {children}
      </Box>
    </Box>
  );
};
