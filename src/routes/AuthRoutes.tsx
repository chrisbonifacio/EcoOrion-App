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
