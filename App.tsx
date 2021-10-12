import { Auth } from 'aws-amplify';
import * as SplashScreen from 'expo-splash-screen';
import { Box } from 'native-base';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AuthCheck } from './src/hooks/AuthCheck';
import { resetProfileCreated } from './src/redux/slice/appslice';
import { resetLoggedIn, setLoggedIn } from './src/redux/slice/authSlice';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const prepareApp = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        if (user) {
          dispatch(setLoggedIn());
        }
      } catch (err) {
        if (err === 'The user is not authenticated') {
          dispatch(resetLoggedIn());
          dispatch(resetProfileCreated());
        }
      } finally {
        await new Promise(resolve => setTimeout(resolve, 2000));
        await SplashScreen.hideAsync();
      }
    };
    prepareApp();
  }, [dispatch]);

  return (
    <AuthCheck>
      <Box flex={1} bg="teal.400" safeArea>
        Hello world
      </Box>
    </AuthCheck>
  );
};

export default App;
