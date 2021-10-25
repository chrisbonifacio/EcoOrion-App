import { GraphQLResult } from '@aws-amplify/api';
import { useFocusEffect } from '@react-navigation/native';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { Center, Heading, ScrollView, VStack } from 'native-base';
import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { createProfile, updateProfile } from '../../graphql/mutations';
import { getProfile } from '../../graphql/queries';
import { setProfileCreated } from '../../redux/slice/appslice';
import {
  CreateProfileMutation,
  GetProfileQuery,
  UpdateProfileMutation,
} from '../../types/api';

interface IObjectKeys {
  [key: string]: string;
}

interface IProfile extends IObjectKeys {
  name: string;
  email: string;
  phone: string;
  address_1: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  postcode: string;
}
interface ProfileComponentProps {
  email?: string;
}

export const ProfileComponent: FunctionComponent<ProfileComponentProps> = ({
  email,
}) => {
  const [profileCreated, updateProfileCreated] = useState<boolean>(false);
  const [settings, updateSettings] = useState<IProfile>({
    name: '',
    email: email || '',
    phone: '',
    address_1: '',
    address_2: '',
    address_3: '',
    city: '',
    state: '',
    postcode: '',
  });
  const dispatch = useDispatch();
  const componentMounted = useRef(true);

  useFocusEffect(
    useCallback(() => {
      const getProfileFunction = async () => {
        const user = await Auth.currentAuthenticatedUser();
        const res: GraphQLResult<GetProfileQuery> = (await API.graphql(
          graphqlOperation(getProfile, { email: user.attributes.email }),
        )) as GraphQLResult<GetProfileQuery>;

        if (res?.data?.getProfile && componentMounted.current) {
          updateProfileCreated(true);
          updateSettings(prev => {
            return {
              ...prev,
              name: res?.data?.getProfile?.name || '',
              email: res?.data?.getProfile?.email || '',
              phone: res?.data?.getProfile?.phone || '',
              address_1: res?.data?.getProfile?.address_1 || '',
              address_2: res?.data?.getProfile?.address_2 || '',
              address_3: res?.data?.getProfile?.address_3 || '',
              city: res?.data?.getProfile?.city || '',
              state: res?.data?.getProfile?.state || '',
              postcode: res?.data?.getProfile?.postcode || '',
            };
          });
        }
      };
      getProfileFunction();
      return () => {
        // This code runs when component is unmounted
        componentMounted.current = false; // (4) set it to false when we leave the page
      };
    }, []),
  );

  const updateState = (e: string, s: string) => {
    updateSettings(prevState => {
      const newState = { ...prevState };
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
    }
    try {
      if (profileCreated) {
        const res: GraphQLResult<UpdateProfileMutation> = (await API.graphql(
          graphqlOperation(updateProfile, {
            input: {
              name: settings.name,
              email: settings.email,
              phone: settings.phone,
              address_1: settings.address_1,
              address_2: settings.address_2,
              address_3: settings.address_3,
              city: settings.city,
              state: settings.state,
              postcode: settings.postcode,
            },
          }),
        )) as GraphQLResult<UpdateProfileMutation>;
        if (res?.data?.updateProfile) {
          Alert.alert('Success', 'Profile has been updated');
        }
      } else {
        const res: GraphQLResult<CreateProfileMutation> = (await API.graphql(
          graphqlOperation(createProfile, {
            input: {
              name: settings.name,
              email: settings.email,
              phone: settings.phone,
              address_1: settings.address_1,
              address_2: settings.address_2,
              address_3: settings.address_3,
              city: settings.city,
              state: settings.state,
              postcode: settings.postcode,
            },
          }),
        )) as GraphQLResult<CreateProfileMutation>;
        if (res?.data?.createProfile) {
          Alert.alert('Success', 'Profile has been created', [
            {
              text: 'OK',
              onPress: () => {
                dispatch(setProfileCreated());
              },
            },
          ]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   keyboardVerticalOffset={60}
    // >
    <ScrollView my={4} mx={4}>
      <VStack space={6}>
        <Center>
          <Heading color="white">Profile Settings</Heading>
        </Center>
        <TextInput
          title="Name"
          value={settings.name}
          onChangeValue={value => updateState(value, 'name')}
        />
        <TextInput
          title="Email"
          disabled
          value={settings.email}
          onChangeValue={value => updateState(value, 'email')}
        />
        <TextInput
          title="Phone"
          value={settings.phone}
          onChangeValue={value => updateState(value, 'phone')}
        />
        <TextInput
          title="Address 1"
          value={settings.address_1}
          onChangeValue={value => updateState(value, 'address_1')}
        />
        <TextInput
          title="Address 2"
          value={settings.address_2}
          onChangeValue={value => updateState(value, 'address_2')}
        />
        <TextInput
          title="Address 3"
          value={settings.address_3}
          onChangeValue={value => updateState(value, 'address_3')}
        />
        <TextInput
          title="City"
          value={settings.city}
          onChangeValue={value => updateState(value, 'city')}
        />
        <TextInput
          title="State"
          value={settings.state}
          onChangeValue={value => updateState(value, 'state')}
        />
        <TextInput
          title="Postcode"
          value={settings.postcode}
          onChangeValue={value => updateState(value, 'postcode')}
        />
        <BaseButton
          title={profileCreated ? 'Update' : 'Create'}
          onPress={() => submitForm()}
        />
      </VStack>
    </ScrollView>
    // </KeyboardAvoidingView>
  );
};

ProfileComponent.defaultProps = {
  email: '',
};
