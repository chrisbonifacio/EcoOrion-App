import { Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const Login: FunctionComponent = () => {
  return (
    <AuthContainer>
      <Text>Login Screen</Text>
    </AuthContainer>
  );
};
