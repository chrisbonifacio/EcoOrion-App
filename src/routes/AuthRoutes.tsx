import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FunctionComponent } from 'react';

import {
  ConfirmNewPassword,
  ForgetPassword,
  Login,
  Register,
  ResetPassword,
} from '../views/AuthScreen';

const Stack = createNativeStackNavigator();

export const AuthRoutes: FunctionComponent = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="ConfirmNewPassword"
          component={ConfirmNewPassword}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ForgetPassword"
          component={ForgetPassword}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        /> */}
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="ResetPassword"
          component={ResetPassword}
        /> */}
      </Stack.Navigator>
    </>
  );
};
