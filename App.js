/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import {Container, Text} from 'native-base';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <Text>Using native-base</Text>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
