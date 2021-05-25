/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {AWSIoTProvider} from '@aws-amplify/pubsub';
import {NavigationContainer} from '@react-navigation/native';
import Amplify, {Auth, PubSub} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import React from 'react';
import {Provider} from 'react-redux';

import {FirstTimeRegistration} from './src/hook/FirstTimeRegistration';
import {store} from './src/redux/store';
// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'ap-southeast-1',
    aws_pubsub_endpoint:
      'wss://a38cesfdzbm498.iot.ap-southeast-1.amazonaws.com/mqtt',
  }),
);

// function HomeScreen({navigation}) {
//   const [water, updateWater] = useState(0);
//   // PubSub.publish('myTopic', {msg: 'Hello to all subscribers!'}).then(() => {
//   //   console.log('q  23');
//   // });
//   PubSub.subscribe('myTopic').subscribe({
//     next: data => console.log('Message received', data),
//     error: error => console.error(error),
//     close: () => console.log('Done'),
//   });

//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Trigger Watering"
//         onPress={() => {
//           PubSub.publish('myTopic', {msg: 'Watering Trigger ' + water}).then(
//             () => {
//               updateWater(water + 1);
//               console.log('q 23');
//             },
//           );
//         }}
//       />
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <FirstTimeRegistration />
      </NavigationContainer>
    </Provider>
  );
};

export default withAuthenticator(App);
// export default App;
