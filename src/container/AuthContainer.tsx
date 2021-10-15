import { Box, Center, Heading, VStack } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { BaseContainer } from './BaseContainer';

interface AuthContainerProps {
  children: ReactNode;
}
export const AuthContainer: FunctionComponent<AuthContainerProps> = ({
  children,
}) => {
  const description = useSelector((state: RootState) => state.auth.description);
  return (
    <BaseContainer>
      <VStack flex={1} justifyContent="flex-end">
        <Box pt={10}>
          <Heading color="primaryGreen" size="xl">
            1M2 Farmer&apos;s App
          </Heading>
          <Heading color="primaryGreen" size="sm">
            {description}
          </Heading>
        </Box>
        <Box flex={1} flexGrow={1} pt={10}>
          {children}
        </Box>
      </VStack>
    </BaseContainer>
  );
};
