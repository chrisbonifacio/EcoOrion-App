import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Amplify } from 'aws-amplify';
import { registerRootComponent } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { WebBrowserRedirectResult } from 'expo-web-browser';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { Linking, Platform } from 'react-native';
// import { Linking } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import config from './src/aws-exports';
import { persistor, store } from './src/redux';
import { theme } from './src/theme';
/* eslint-disable consistent-return */
async function urlOpener(url: string, redirectUrl: string) {
  const { type, url: newUrl } = (await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl,
  )) as WebBrowserRedirectResult;
  if (type === 'success') {
    await WebBrowser.dismissBrowser();
    if (Platform.OS === 'ios') {
      return Linking.openURL(newUrl);
    }
  }
}

const awsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'exp://127.0.0.1:19000',
    redirectSignOut: 'exp://127.0.0.1:19000',
    urlOpener,
  },
};

Amplify.configure(awsConfig);

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
