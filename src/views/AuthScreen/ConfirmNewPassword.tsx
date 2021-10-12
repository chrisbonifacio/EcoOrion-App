import { Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const ConfirmNewPassword: FunctionComponent = () => {
  return (
    <AuthContainer>
      <Text>Confirm New Password Screen</Text>
    </AuthContainer>
  );
};
