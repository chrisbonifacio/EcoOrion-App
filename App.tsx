import { Auth } from 'aws-amplify';
import * as SplashScreen from 'expo-splash-screen';
import { Box } from 'native-base';
import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AuthCheck } from './src/hooks/AuthCheck';
import { resetLoggedIn, resetProfileCreated } from './src/redux/slice/appslice';

const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const prepareApp = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
      } catch (err) {
        if (err === 'The user is not authenticated') {
          dispatch(resetLoggedIn());
          dispatch(resetProfileCreated());
        }
        console.log('Error from prepare App Function');
        console.log(err === 'The user is not authenticated');
        console.log('Error from prepare App Function');
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
