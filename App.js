/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {NativeBaseProvider} from 'native-base';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {ProfileCreationCheck} from './src/hook/ProfileCreationCheck';
import {store} from './src/redux/store';
import {RouteContainer} from './src/route';
import {theme} from './src/themes';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  });
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <ProfileCreationCheck>
              <RouteContainer />
            </ProfileCreationCheck>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default withAuthenticator(App);
