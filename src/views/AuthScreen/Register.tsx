import { Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const Register: FunctionComponent = () => {
  return (
    <AuthContainer>
      <Text>Register Screen</Text>
    </AuthContainer>
  );
};
