import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';

import { AuthScreenParamListu } from '../types/AuthRouteType';
import {
  ConfirmNewPassword,
  ForgetPassword,
  Login,
  Register,
  ResetPassword,
} from '../views/AuthScreen';

export const AuthRoutes: FunctionComponent = () => {
  const Stack = createNativeStackNavigator<AuthScreenParamListu>();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="ConfirmNewPassword"
          component={ConfirmNewPassword}
        />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </>
  );
};
