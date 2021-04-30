import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import { Amplify } from 'aws-amplify'
import config from './src/aws-exports'

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  }
})

if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});