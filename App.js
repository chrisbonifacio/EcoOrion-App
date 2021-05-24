/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {withAuthenticator} from 'aws-amplify-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {View, Button} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Amplify, {PubSub, Auth} from 'aws-amplify';
import {AWSIoTProvider} from '@aws-amplify/pubsub';
import HomeScreen from './src/views/HomeScreen';
import {Authenticator, SignIn} from 'aws-amplify-react-native';
import SettingScreen from './src/views/settings/index';
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

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default withAuthenticator(App);
// export default App;
