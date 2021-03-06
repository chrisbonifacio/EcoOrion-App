import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import { Box, ScrollView } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { Alert } from 'react-native';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';
import { AuthScreenParamList } from '../../types/AuthRouteType';

export const ResetPassword: FunctionComponent = () => {
  const route = useRoute<RouteProp<AuthScreenParamList, 'ResetPassword'>>();
  const navigation = useNavigation<StackNavigationProp<AuthScreenParamList>>();
  const [passcode, updatePasscode] = useState('');
  const [password, updatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const resetPassword = async () => {
    if (passcode !== '' && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        try {
          const res = await Auth.forgotPasswordSubmit(
            route.params.username,
            passcode,
            password,
          );
          if (res) {
            console.log(res);
            navigation.navigate('Login');
          }
        } catch (err) {
          console.log(err);
          Alert.alert(
            'Error',
            'Please check your passcode and make sure that password is longer than 8 characters with capital letters, lowercase letters, numbers & special characters',
          );
        }
      } else {
        Alert.alert('Error', 'Password does not match');
      }
    } else {
      Alert.alert(
        'Error',
        'Please input ur passcode from email and your new password.',
      );
    }
  };

  return (
    <AuthContainer>
      <ScrollView>
        <Box pb="4">
          <TextInput
            title="Confirmation Code"
            value={passcode}
            onChangeValue={updatePasscode}
          />
        </Box>
        <Box pb="4">
          <TextInput
            title="Update New Password"
            value={password}
            onChangeValue={updatePassword}
          />
        </Box>
        <Box pb="4">
          <TextInput
            title="Confirm New Password"
            value={confirmPassword}
            onChangeValue={setConfirmPassword}
          />
        </Box>
        <Box mt={8}>
          <BaseButton title="Confirm Reset Password" onPress={resetPassword} />
        </Box>
        <Box mt={4}>
          <BaseButton
            title="Cancel"
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </Box>
      </ScrollView>
    </AuthContainer>
  );
};
