import { Box, Button, ScrollView } from 'native-base';
import React, { FunctionComponent, useState } from 'react';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';

export const Register: FunctionComponent = () => {
  const [username, setusername] = useState('');
  const signIn = () => {
    console.log('123');
  };
  return (
    <AuthContainer>
      <ScrollView>
        <Box pb="4">
          <TextInput
            title="Username"
            value={username}
            onChangeValue={setusername}
          />
        </Box>
        <Box mb={8} mt={8}>
          <BaseButton title="Sign In" onPress={signIn} />
        </Box>
        <Box mb={8} mt={8}>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Sign up
          </Button>
        </Box>
      </ScrollView>
    </AuthContainer>
  );
};
