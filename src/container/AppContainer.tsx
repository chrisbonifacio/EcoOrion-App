import React, { FunctionComponent, ReactNode } from 'react';

import { BaseContainer } from './BaseContainer';

interface AppContainerProps {
  children: ReactNode;
}
export const AppContainer: FunctionComponent<AppContainerProps> = ({
  children,
}) => {
  return <BaseContainer>{children}</BaseContainer>;
};
