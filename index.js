/**
 * @format
 */
import 'react-native-gesture-handler';

import {AWSIoTProvider} from '@aws-amplify/pubsub';
import Amplify from 'aws-amplify';
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

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'ap-southeast-1',
    aws_pubsub_endpoint:
      'wss://a38cesfdzbm498-ats.iot.ap-southeast-1.amazonaws.com/mqtt',
  }),
);

AppRegistry.registerComponent(appName, () => App);
