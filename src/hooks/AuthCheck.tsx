import React, { FunctionComponent, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/store';
import { AuthRoutes } from '../routes';

interface AuthCheckProps {
  children: ReactNode;
}
export const AuthCheck: FunctionComponent<AuthCheckProps> = ({ children }) => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  return (
    <>
      {loggedIn && children}
      {!loggedIn && <AuthRoutes />}
    </>
  );
};
