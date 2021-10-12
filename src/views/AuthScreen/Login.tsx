import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Auth } from 'aws-amplify';
import { Button, FormControl, HStack, Input, Link, Text } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AuthContainer } from '../../container';
import { setLoggedIn } from '../../redux/slice/authSlice';

export const Login: FunctionComponent<
  NativeStackScreenProps<{
    Login: undefined;
    ForgetPassword: undefined;
    Register: undefined;
  }>
> = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      const result = await Auth.signIn(username, password);
      if (result) {
        dispatch(setLoggedIn());
      }
    } catch (error_: any) {
      console.log(error_);
    }
  };
  return (
    <AuthContainer>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}
        >
          Username
        </FormControl.Label>
        <Input
          value={username}
          onChangeText={value => {
            setusername(value);
          }}
        />
      </FormControl>
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'xs',
            fontWeight: 500,
          }}
        >
          Password
        </FormControl.Label>
        <Input
          type="password"
          value={password}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Link
          _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
          alignSelf="flex-end"
          mt="1"
          onPress={() => {
            navigation.navigate('ForgetPassword');
          }}
        >
          Forget Password?
        </Link>
      </FormControl>
      <Button onPress={signIn}>Sign in</Button>
      <HStack mt="6" justifyContent="center">
        <Text fontSize="sm" color="muted.700" fontWeight={400}>
          I&apos;m a new user.
        </Text>
        <Link
          _text={{
            color: 'indigo.500',
            fontWeight: 'medium',
            fontSize: 'sm',
          }}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          Sign Up
        </Link>
      </HStack>
    </AuthContainer>
  );
};
