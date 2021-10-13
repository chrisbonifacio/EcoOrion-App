import React, { FunctionComponent, ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { LoadingComponent } from '../components/Loading';
import { RootState } from '../redux/store';

interface LoadingCheckProps {
  children: ReactNode;
}
export const LoadingCheck: FunctionComponent<LoadingCheckProps> = ({
  children,
}) => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  return (
    <>
      {isLoading && <LoadingComponent />}
      {!isLoading && children}
    </>
  );
};
