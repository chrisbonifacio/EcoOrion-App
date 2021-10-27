import { Auth } from '@aws-amplify/auth/lib-esm/Auth';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { Alert } from 'react-native';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AuthContainer } from '../../container';
import { AuthScreenParamList } from '../../types/AuthRouteType';

export const ConfirmAccount: FunctionComponent = () => {
  const navigation = useNavigation<StackNavigationProp<AuthScreenParamList>>();
  const route = useRoute<RouteProp<AuthScreenParamList, 'ConfirmAccount'>>();
  const [code, updateCode] = useState('');

  const confirmAccountHandler = async () => {
    try {
      console.log(route.params.username);
      console.log(code);
      const res = await Auth.confirmSignUp(route.params.username, code);
      if (res) {
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
      Alert.alert('Error', 'Invalid Code');
    }
  };
  return (
    <AuthContainer>
      <Box pb="4">
        <TextInput
          title="Confirmation Code"
          value={code}
          onChangeValue={updateCode}
        />
      </Box>
      <Box mt={8}>
        <BaseButton title="Confirm Account" onPress={confirmAccountHandler} />
      </Box>
      <Box mt={4}>
        <BaseButton
          title="Back"
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </Box>
    </AuthContainer>
  );
};
