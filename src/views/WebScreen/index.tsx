import { Box } from 'native-base';
import React, { FunctionComponent } from 'react';
import { WebView } from 'react-native-webview';

import { AppHeader } from '../../components/Header/App';

export const WebScreen: FunctionComponent = () => {
  return (
    <>
      <AppHeader />
      <Box flex={1}>
        <WebView source={{ uri: 'https://1m2.asia/' }} style={{ flex: 1 }} />
      </Box>
    </>
  );
};

export default WebScreen;
