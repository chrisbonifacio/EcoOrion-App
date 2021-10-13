import React, { FunctionComponent, ReactNode } from 'react';

import { BaseContainer } from './BaseContainer';

interface AuthContainerProps {
  children: ReactNode;
}
export const AuthContainer: FunctionComponent<AuthContainerProps> = ({
  children,
}) => {
  return <BaseContainer>{children}</BaseContainer>;
};
