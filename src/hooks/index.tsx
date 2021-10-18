import React, { FunctionComponent, ReactNode } from 'react';

import { AuthCheck } from './AuthCheck';
import { LoadingCheck } from './LoadingCheck';
import { ProfileCheck } from './ProfileCheck';

interface AppMiddlewareProps {
  children: ReactNode;
}
export const AppMiddleware: FunctionComponent<AppMiddlewareProps> = ({
  children,
}) => {
  return (
    <LoadingCheck>
      <AuthCheck>
        <ProfileCheck>{children}</ProfileCheck>
      </AuthCheck>
    </LoadingCheck>
  );
};

export default AppMiddleware;
