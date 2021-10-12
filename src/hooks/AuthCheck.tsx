import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { LoadingComponent } from '../components/Loading';
import { RootState } from '../redux/store';
import { AuthRoutes } from '../routes';

export const AuthCheck: FunctionComponent = () => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  return (
    <>
      {isLoading && <LoadingComponent />}
      {!isLoading && <AuthRoutes />}
    </>
  );
};
