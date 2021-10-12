import { Button, FormControl, Input } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AuthContainer } from '../../container';

export const Register: FunctionComponent = () => {
  return (
    <AuthContainer>
      <FormControl>
        <FormControl.Label
          _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
        >
          Email
        </FormControl.Label>
        <Input />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
        >
          Password
        </FormControl.Label>
        <Input type="password" />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}
        >
          Confirm Password
        </FormControl.Label>
        <Input type="password" />
      </FormControl>
      <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
        Sign up
      </Button>
    </AuthContainer>
  );
};
