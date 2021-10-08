import React, { FunctionComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box, ScrollView } from 'native-base';
import { store, persistor } from './src/redux';

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
const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            <ScrollView>
              <Box flex={1} bg="teal.400" safeArea>
                Hello world
              </Box>
            </ScrollView>
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
