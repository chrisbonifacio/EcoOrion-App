import React, { FunctionComponent, ReactNode } from 'react';

import { AuthCheck } from './AuthCheck';
import { ProfileCheck } from './ProfileCheck';

interface AppMiddlewareProps {
  children: ReactNode;
}
export const AppMiddleware: FunctionComponent<AppMiddlewareProps> = ({
  children,
}) => {
  return (
    <AuthCheck>
      <ProfileCheck>{children}</ProfileCheck>
    </AuthCheck>
  );
};

export default AppMiddleware;
