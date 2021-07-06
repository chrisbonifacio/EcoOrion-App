import {Box} from 'native-base';
import React from 'react';
import {WebView} from 'react-native-webview';

import {AppContainer} from '../../container/App';

export const WebScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation} title="Eco-Orion">
      <Box flex={1}>
        <WebView source={{uri: 'https://ecoorion.com.my/'}} style={{flex: 1}} />
      </Box>
    </AppContainer>
  );
};

export default WebScreen;
