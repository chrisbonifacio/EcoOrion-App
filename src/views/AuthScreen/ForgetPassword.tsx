import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Auth } from 'aws-amplify';
import { Box, ScrollView } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { Alert } from 'react-native';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';
import { AuthScreenParamList } from '../../types/AuthRouteType';

export const ForgetPassword: FunctionComponent = () => {
  const [username, setusername] = useState('');
  const navigation = useNavigation<StackNavigationProp<AuthScreenParamList>>();
  const ForgetPasswordSubmit = async () => {
    try {
      const res = await Auth.forgotPassword(username);
      if (res) {
        console.log(res);
        navigation.navigate('ResetPassword', { username });
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Error', err);
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
        <Box mt={8}>
          <BaseButton title="Forget Password" onPress={ForgetPasswordSubmit} />
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
