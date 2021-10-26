import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Amplify, { Auth } from 'aws-amplify';
import { registerRootComponent } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
// import { Linking } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import config from './src/aws-exports';
import { persistor, store } from './src/redux';
import { theme } from './src/theme';
/* eslint-disable */
async function urlOpener(url:string, redirectUrl:string) {
  const browser = await WebBrowser.openAuthSessionAsync(
    url,
    redirectUrl,
  );
  console.log(browser)
  

  // if (type === 'success' && Platform.OS === 'ios') {
  //   WebBrowser.dismissBrowser();
  //   return Linking.openURL(newUrl);
  // }
}

const awsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'exp://192.168.1.116:19000/--/',
    redirectSignOut: 'exp://192.168.1.116:19000/--/',
    urlOpener,
  },
};
Amplify.configure(config);
Auth.configure(config);

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
