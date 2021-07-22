import {API, Auth} from 'aws-amplify';
import {
  Box,
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';

import {createProfile, getProfile} from '../../api';
import {DefaultButton} from '../../component/Button';
import {TextInput} from '../../component/Form/TextInput';

export const ProfileRegistration = ({navigation, profile, updateProfile}) => {
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

      Auth.currentCredentials().then(async info => {
        const apiName = 'EcoOrionRestApi';
        const path = '/iot';
        const requestBody = {
          headers: {
            Authorization: `${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          },
          body: {
            identityId: info.identityId,
          },
        };

        API.post(apiName, path, requestBody)
          .then(response => {
            console.log(response);
            // Add your code here
          })
          .catch(error => {
            console.log(error);
          });
      });

      const res = await getProfile(user.attributes.email);
      updateSettings(prev => {
        return {...prev, ...res.data.getProfile, email: user.attributes.email};
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
    const res = await createProfile({
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
    if (res.data.createProfile) {
      Alert.alert('Success', 'Profile has been created');
      updateProfile({...res.data.createProfile});
    }
  };
  return (
    <Box flex={1} bgColor="green.100">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}>
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
              disabled={true}
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
    </Box>
  );
};
