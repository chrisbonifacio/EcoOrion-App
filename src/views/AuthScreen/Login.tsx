import { GraphQLResult } from '@aws-amplify/api';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { API, Auth, graphqlOperation, Hub } from 'aws-amplify';
import { Box, HStack, Link, ScrollView, Text } from 'native-base';
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
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
import { AuthScreenParamList } from '../../types/AuthRouteType';

export const Login: FunctionComponent<
  NativeStackScreenProps<AuthScreenParamList>
> = ({ navigation }) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signIn = useCallback(async () => {
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
    } catch (err: any) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      if (err.message === 'User is not confirmed.') {
        navigation.navigate('ConfirmAccount', { username });
      }
      dispatch(finishLoading());
      console.log(err);
    }
  }, [dispatch, navigation, password, username]);

  useEffect(() => {
    const socialSignIn = async () => {
      dispatch(setLoading());
      try {
        const result = await Auth.currentAuthenticatedUser();
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
        dispatch(finishLoading());
        console.log(err);
      }
    };

    Hub.listen('auth', async ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          console.log('signIn');
          socialSignIn();
          break;
        case 'signOut':
          console.log('signOut');
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure');
          break;
        default:
          break;
      }
    });
  }, [dispatch, signIn]);

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
        <Box pb="4">
          <BaseButton
            title="Sign In with facebook"
            onPress={useCallback(() => {
              try {
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                });
              } catch (err) {
                console.log(err);
              }
            }, [])}
          />
        </Box>
        <Box pb="4">
          <BaseButton
            title="Sign In with google"
            onPress={useCallback(() => {
              try {
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                });
              } catch (err) {
                console.log(err);
              }
            }, [])}
          />
        </Box>
      </ScrollView>
    </AuthContainer>
  );
};
