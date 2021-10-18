import React, { FunctionComponent } from 'react';
import { WebView } from 'react-native-webview';

import { AppContainer } from '../../container';

export const WebScreen: FunctionComponent = () => {
  return (
    <AppContainer>
      <WebView source={{ uri: 'https://1m2.asia/' }} style={{ flex: 1 }} />
    </AppContainer>
  );
};

export default WebScreen;
