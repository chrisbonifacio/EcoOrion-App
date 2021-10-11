import { Box, Button, Text } from 'native-base';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingComponent } from '../components/Loading';
import { finishLoading, setLoading } from '../redux/slice/appslice';
import { updateAuthStatus } from '../redux/slice/authSlice';
import { RootState } from '../redux/store';

export const AuthCheck: FunctionComponent = () => {
  const authStatus = useSelector((state: RootState) => state.auth.authStatus);
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  const dispatch = useDispatch();
  return (
    <Box flex={1} safeArea>
      {isLoading && <LoadingComponent />}
      {!isLoading && authStatus === 'signIn' && (
        <>
          <Text>Need to signin</Text>
          <Button
            onPress={() => {
              dispatch(setLoading());
              dispatch(updateAuthStatus('loading'));
              setTimeout(() => {
                dispatch(finishLoading());
              }, 2000);
            }}
          >
            Primary
          </Button>
        </>
      )}
      {!isLoading && authStatus === 'loading' && (
        <>
          <Text>Loading page</Text>
          <Button
            onPress={() => {
              dispatch(setLoading());
              dispatch(updateAuthStatus('signIn'));
              setTimeout(() => {
                dispatch(finishLoading());
              }, 2000);
            }}
          >
            login
          </Button>
        </>
      )}
    </Box>
  );
};
