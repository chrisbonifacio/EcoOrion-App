import { Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const ForgetPassword: FunctionComponent = () => {
  return (
    <AuthContainer>
      <Text>Auth Screen</Text>
    </AuthContainer>
  );
};
