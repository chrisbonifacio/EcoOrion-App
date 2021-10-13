import { Heading } from 'native-base';
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
      <Heading color="primaryGreen" size="xl">
        1M2 Farmer&apos;s App
      </Heading>
      <Heading color="primaryGreen" size="sm">
        {description}
      </Heading>
      {children}
    </BaseContainer>
  );
};
