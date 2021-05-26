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

import {createProfile} from '../../api';
export const ProfileRegistration = () => {
  const [profile, updateProfile] = useState({
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
    Auth.currentAuthenticatedUser().then(user => {
      updateProfile(prevState => {
        return {...prevState, email: user.attributes.email};
      });
    });
  }, []);

  const updateState = (e, s) => {
    updateProfile(prevProfile => {
      const newState = {...prevProfile};
      newState[s] = e;
      return newState;
    });
  };

  const submitForm = async () => {
    if (
      profile.name === '' ||
      profile.email === '' ||
      profile.phone === '' ||
      profile.address_1 === '' ||
      profile.address_2 === '' ||
      profile.address_3 === '' ||
      profile.city === '' ||
      profile.state === '' ||
      profile.postcode === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill in all the fields as they are mandatory',
      );
      return;
    }

    const res = await createProfile({
      ...profile,
    });
  };
  return (
    <Container>
      <Content style={{padding: 10}}>
        <Card>
          <CardItem header>
            <Text>Registration</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>This helps us know more about you</Text>
            </Body>
          </CardItem>
        </Card>
        <Form>
          <Item stackedLabel>
            <Label>Name</Label>
            <Input
              value={profile.name}
              onChangeText={value => updateState(value, 'name')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Email</Label>
            <Input
              value={profile.email}
              disabled
              onChangeText={value => updateState(value, 'email')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Phone</Label>
            <Input
              value={profile.phone}
              onChangeText={value => updateState(value, 'phone')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Address 1</Label>
            <Input
              value={profile.address_1}
              onChangeText={value => updateState(value, 'address_1')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Address 2</Label>
            <Input
              value={profile.address_2}
              onChangeText={value => updateState(value, 'address_2')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Address 3</Label>
            <Input
              value={profile.address_3}
              onChangeText={value => updateState(value, 'address_3')}
            />
          </Item>
          <Item stackedLabel>
            <Label>City</Label>
            <Input
              value={profile.city}
              onChangeText={value => updateState(value, 'city')}
            />
          </Item>
          <Item stackedLabel>
            <Label>State</Label>
            <Input
              value={profile.state}
              onChangeText={value => updateState(value, 'state')}
            />
          </Item>
          <Item stackedLabel>
            <Label>Postcode</Label>
            <Input
              value={profile.postcode}
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
  );
};
