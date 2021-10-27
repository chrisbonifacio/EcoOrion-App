import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import { Box, ScrollView } from 'native-base';
import React, { FunctionComponent, useState } from 'react';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';
import { AuthScreenParamList } from '../../types/AuthRouteType';

export const Register: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<AuthScreenParamList>>();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signUp = async () => {
    try {
      const res = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(res);
      if (res) {
        navigation.navigate('ConfirmAccount', { username });
      }
    } catch (err) {
      console.log(err);
    }
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
        <Box pb="4">
          <TextInput title="Email" value={email} onChangeValue={setEmail} />
        </Box>
        <Box pb="4">
          <TextInput
            title="Password"
            value={password}
            onChangeValue={setPassword}
            type="password"
          />
        </Box>
        <Box mt={8}>
          <BaseButton title="Sign Up" onPress={signUp} />
        </Box>
        <Box mt={4}>
          <BaseButton
            title="Back"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </Box>
      </ScrollView>
    </AuthContainer>
  );
};
