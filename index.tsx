import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Amplify from 'aws-amplify';
import { registerRootComponent } from 'expo';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import config from './src/aws-exports';
import { persistor, store } from './src/redux';
import { theme } from './src/theme';

Amplify.configure(config);

const AppRoot = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StatusBar barStyle="light-content" />
            <App />
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

registerRootComponent(AppRoot);
