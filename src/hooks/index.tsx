import React, { FunctionComponent, ReactNode } from 'react';

import { AuthCheck } from './AuthCheck';
import { LoadingCheck } from './LoadingCheck';

interface AppMiddlewareProps {
  children: ReactNode;
}
export const AppMiddleware: FunctionComponent<AppMiddlewareProps> = ({
  children,
}) => {
  return (
    <LoadingCheck>
      <AuthCheck>{children}</AuthCheck>
    </LoadingCheck>
  );
};

export default AppMiddleware;
