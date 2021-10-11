import { NavigationContainer } from '@react-navigation/native';
import Amplify from 'aws-amplify';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider } from 'native-base';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import config from './src/aws-exports';
import { persistor, store } from './src/redux';

Amplify.configure(config);

const AppRoot = () => {
  useEffect(() => {
    const prepareApp = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    prepareApp();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            <App />
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

registerRootComponent(AppRoot);
