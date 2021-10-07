import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingMarkup = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
    }}
  >
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar />
        </View>
      </PersistGate>
    </Provider>
  );
}
