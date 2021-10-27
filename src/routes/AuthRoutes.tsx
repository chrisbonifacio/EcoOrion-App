import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';

import { AuthScreenParamList } from '../types/AuthRouteType';
import {
  ConfirmAccount,
  ForgetPassword,
  Login,
  Register,
  ResetPassword,
} from '../views/AuthScreen';

export const AuthRoutes: FunctionComponent = () => {
  const Stack = createNativeStackNavigator<AuthScreenParamList>();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </>
  );
};
