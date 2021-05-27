import {Auth} from 'aws-amplify';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {getProfile, updateProfile} from '../../api';
import {AppLayout} from '../../container/App';

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
    <AppLayout navigation={navigation} title={'Settings'}>
      <Container>
        <Content style={{padding: 10}}>
          <Form>
            <Item stackedLabel>
              <Label>Name</Label>
              <Input
                value={settings.name}
                onChangeText={value => updateState(value, 'name')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                value={settings.email}
                disabled
                onChangeText={value => updateState(value, 'email')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Phone</Label>
              <Input
                value={settings.phone}
                onChangeText={value => updateState(value, 'phone')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Address 1</Label>
              <Input
                value={settings.address_1}
                onChangeText={value => updateState(value, 'address_1')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Address 2</Label>
              <Input
                value={settings.address_2}
                onChangeText={value => updateState(value, 'address_2')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Address 3</Label>
              <Input
                value={settings.address_3}
                onChangeText={value => updateState(value, 'address_3')}
              />
            </Item>
            <Item stackedLabel>
              <Label>City</Label>
              <Input
                value={settings.city}
                onChangeText={value => updateState(value, 'city')}
              />
            </Item>
            <Item stackedLabel>
              <Label>State</Label>
              <Input
                value={settings.state}
                onChangeText={value => updateState(value, 'state')}
              />
            </Item>
            <Item stackedLabel>
              <Label>Postcode</Label>
              <Input
                value={settings.postcode}
                onChangeText={value => updateState(value, 'postcode')}
              />
            </Item>
          </Form>
          <Button
            style={{marginTop: 20, marginBottom: 50}}
            full
            rounded
            onPress={() => {
              submitForm();
            }}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    </AppLayout>
  );
};
