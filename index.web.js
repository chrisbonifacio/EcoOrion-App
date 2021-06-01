import {Amplify, API} from 'aws-amplify';
import {AppRegistry} from 'react-native';

import App from './App';
import {name as appName} from './app.json';
import config from './src/aws-exports';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
API.configure({
  ...config,
});
if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
