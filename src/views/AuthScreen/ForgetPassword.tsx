import { Text } from 'native-base';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AuthContainer } from '../../container';
import { updateDescription } from '../../redux/slice/authSlice';

export const ForgetPassword: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateDescription('Register an account to get started'));
  }, [dispatch]);
  return (
    <AuthContainer>
      <Text>Forget Password Screen</Text>
    </AuthContainer>
  );
};
