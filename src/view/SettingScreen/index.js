import {Auth} from 'aws-amplify';
import {
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {getProfile, updateProfile} from '../../api';
import {DefaultButton} from '../../component/Button';
import {TextInput} from '../../component/Form/TextInput';
import {AppContainer} from '../../container/App';

export const SettingScreen = ({navigation}) => {
  const [settings, updateSettings] = useState({
    name: '',
    email: '',
    phone: '',
    address_1: '',
    address_2: '',
    address_3: '',
    city: '',
    state: ' ',
    postcode: '',
  });
  useEffect(() => {
    const getSettingsFunction = async email => {
      const user = await Auth.currentAuthenticatedUser();
      // const res = await getProfile(user.attributes.email);
      const res = await getProfile(user.attributes.email);
      updateSettings(prev => {
        return {...prev, ...res.data.getProfile};
      });
    };
    getSettingsFunction();
  }, []);
  const updateState = (e, s) => {
    updateSettings(prevState => {
      const newState = {...prevState};
      newState[s] = e;
      return newState;
    });
  };
  const submitForm = async () => {
    if (
      settings.name === '' ||
      settings.email === '' ||
      settings.phone === '' ||
      settings.address_1 === '' ||
      settings.address_2 === '' ||
      settings.address_3 === '' ||
      settings.city === '' ||
      settings.state === '' ||
      settings.postcode === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill in all the fields as they are mandatory',
      );
      return;
    }
    const res = await updateProfile({
      name: settings.name,
      email: settings.email,
      phone: settings.phone,
      address_1: settings.address_1,
      address_2: settings.address_2,
      address_3: settings.address_3,
      city: settings.city,
      state: settings.state,
      postcode: settings.postcode,
    });
    if (res.data.updateProfile) {
      Alert.alert('Success', 'Settings has been updated');
      navigation.navigate('Home');
    }
  };
  return (
    <AppContainer navigation={navigation} title={'Settings'}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={120}>
        <ScrollView my={4} mx={4}>
          <VStack space={6}>
            <Center>
              <Heading>Profile Settings</Heading>
            </Center>
            <TextInput
              title="Name"
              value={settings.name}
              triggerFunction={value => updateState(value, 'name')}
            />
            <TextInput
              title="Email"
              value={settings.email}
              triggerFunction={value => updateState(value, 'email')}
            />
            <TextInput
              title="Phone"
              value={settings.phone}
              triggerFunction={value => updateState(value, 'phone')}
            />
            <TextInput
              title="Address 1"
              value={settings.address_1}
              triggerFunction={value => updateState(value, 'address_1')}
            />
            <TextInput
              title="Address 2"
              value={settings.address_2}
              triggerFunction={value => updateState(value, 'address_2')}
            />
            <TextInput
              title="Address 3"
              value={settings.address_3}
              triggerFunction={value => updateState(value, 'address_3')}
            />
            <TextInput
              title="City"
              value={settings.city}
              triggerFunction={value => updateState(value, 'city')}
            />
            <TextInput
              title="State"
              value={settings.state}
              triggerFunction={value => updateState(value, 'state')}
            />
            <TextInput
              title="Postcode"
              value={settings.postcode}
              triggerFunction={value => updateState(value, 'postcode')}
            />
            <DefaultButton
              title="Submit"
              triggerFunction={() => submitForm()}
            />
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </AppContainer>
  );
};
