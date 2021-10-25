import { GraphQLResult } from '@aws-amplify/api';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Box, HStack, Link, Text } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';
import { getProfile } from '../../graphql/queries';
import {
  finishLoading,
  resetProfileCreated,
  setLoading,
  setProfileCreated,
  updateEmail,
} from '../../redux/slice/appslice';
import { setLoggedIn } from '../../redux/slice/authSlice';
import { GetProfileQuery } from '../../types/api';

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
    dispatch(setLoading());
    try {
      const result = await Auth.signIn(username, password);
      if (result) {
        dispatch(setLoggedIn());
        dispatch(updateEmail(result.attributes.email));
        const profile: GraphQLResult<GetProfileQuery> = (await API.graphql(
          graphqlOperation(getProfile, { email: result.attributes.email }),
        )) as GraphQLResult<GetProfileQuery>;
        if (profile.data?.getProfile) {
          dispatch(setProfileCreated());
        } else {
          dispatch(resetProfileCreated());
        }
      }
    } catch (err: unknown) {
      console.log(err);
    } finally {
      dispatch(finishLoading());
    }
  };
  return (
    <AuthContainer>
      <Box pb="4">
        <TextInput
          title="Username"
          value={username}
          onChangeValue={setusername}
        />
      </Box>
      <Box pb="2">
        <TextInput
          title="Password"
          value={password}
          onChangeValue={setPassword}
          type="password"
        />
      </Box>
      <Link
        mb={8}
        _text={{ fontSize: 'xs', color: 'primaryGreen' }}
        alignSelf="flex-end"
        onPress={() => {
          navigation.navigate('ForgetPassword');
        }}
      >
        Forget Password?
      </Link>
      <Box mb={8} mt={8}>
        <BaseButton title="Sign In" onPress={signIn} />
      </Box>
      <HStack mb={8} justifyContent="center">
        <Text fontSize="xs" color="white" fontWeight={400}>
          I&apos;m a new user.{' '}
        </Text>
        <Link
          _text={{
            color: 'primaryGreen',
            fontWeight: 'medium',
            fontSize: 'xs',
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
