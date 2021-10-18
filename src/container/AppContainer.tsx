import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

import { AppHeader } from '../components/Header/App';
import { BaseContainer } from './BaseContainer';

interface AppContainerProps {
  children: ReactNode;
}
export const AppContainer: FunctionComponent<AppContainerProps> = ({
  children,
}) => {
  return (
    <BaseContainer>
      <AppHeader />
      <Box flex={1} flexGrow={1}>
        {children}
      </Box>
    </BaseContainer>
  );
};
