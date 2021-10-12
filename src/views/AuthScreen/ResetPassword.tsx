import { Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const ResetPassword: FunctionComponent = () => {
  return (
    <AuthContainer>
      <Text>Reset Password Screen</Text>
    </AuthContainer>
  );
};
