import { GraphQLResult } from '@aws-amplify/api';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { API, Auth, graphqlOperation, PubSub } from 'aws-amplify';
import { Box, Heading, ScrollView } from 'native-base';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { BaseButton } from '../../components/Button';
import { SchedulerInput, TextInput } from '../../components/Form';
import { AppContainer } from '../../container';
import { createStation, updateStation } from '../../graphql/mutations';
import { stationByStationID } from '../../graphql/queries';
import {
  CreateStationMutation,
  StationByStationIDQuery,
  UpdateStationMutation,
} from '../../types/api';
import {
  AppDrawerParamList,
  StationScreenParamList,
} from '../../types/AppRouteType';
import { SettingStationFormState } from '../../types/view/SettingScreen';

type SettingStationScreenProp = RouteProp<
  StationScreenParamList,
  'SettingStation'
>;

export const SettingStation: FunctionComponent = () => {
  const navigation = useNavigation<AppDrawerParamList>();
  const route = useRoute<SettingStationScreenProp>();
  const [form, updateForm] = useState<SettingStationFormState>({
    station_id: route.params.stationId,
    station_name: '',
    water_schedule: {
      cron: '',
      duration: '',
    },
    fertilizer_schedule: {
      cron: '',
      duration: '',
    },
    user_id: '',
    id: '',
  });

  const submitForm = async () => {
    if (
      form.station_name === '' ||
      form.water_schedule.cron === '' ||
      form.fertilizer_schedule.duration === '' ||
      form.fertilizer_schedule.cron === '' ||
      form.fertilizer_schedule.duration === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill in all the fields as they are mandatory',
      );
    }

    try {
      if (route.params.create) {
        const res: GraphQLResult<CreateStationMutation> = (await API.graphql(
          graphqlOperation(createStation, {
            input: {
              station_id: form.station_id,
              station_name: form.station_name,
              water_schedule: form.water_schedule,
              fertilizer_schedule: form.fertilizer_schedule,
              user_id: form.user_id,
            },
          }),
        )) as GraphQLResult<CreateStationMutation>;
        if (res.data) {
          Alert.alert('Created', 'Station has been created', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('DetailStation', {
                  stationId: form.station_id,
                });
              },
            },
          ]);
        }
      } else {
        const res: GraphQLResult<UpdateStationMutation> = (await API.graphql(
          graphqlOperation(updateStation, { input: { ...form } }),
        )) as GraphQLResult<UpdateStationMutation>;
        if (res.data) {
          PubSub.publish(`device/${route.params.stationId}/setting`, {
            ...form,
          }).then(pub => {
            console.log(pub);
            Alert.alert('Updated', 'Station has been update successfully', [
              {
                text: 'OK',
                onPress: () => {
                  navigation.navigate('DetailStation', {
                    stationId: form.station_id,
                  });
                },
              },
            ]);
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      const getStationSetttings = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          const res: GraphQLResult<StationByStationIDQuery> =
            (await API.graphql(
              graphqlOperation(stationByStationID, {
                station_id: form.station_id,
              }),
            )) as GraphQLResult<StationByStationIDQuery>;
          if (user.attributes.email) {
            updateForm(prev => {
              return {
                ...prev,
                user_id: user.attributes.email,
              };
            });
          }
          if (
            res?.data?.StationByStationID?.items &&
            res?.data?.StationByStationID?.items[0]
          ) {
            updateForm(prev => {
              return {
                ...prev,
                station_name:
                  res?.data?.StationByStationID?.items &&
                  res?.data?.StationByStationID?.items[0] &&
                  res?.data?.StationByStationID?.items[0].station_name
                    ? res?.data?.StationByStationID?.items[0].station_name
                    : '',
                water_schedule:
                  res?.data?.StationByStationID?.items &&
                  res?.data?.StationByStationID?.items[0] &&
                  res.data.StationByStationID.items[0].water_schedule
                    ? res.data.StationByStationID.items[0].water_schedule
                    : { cron: '', duration: '' },
                fertilizer_schedule:
                  res?.data?.StationByStationID?.items &&
                  res?.data?.StationByStationID?.items[0] &&
                  res.data.StationByStationID.items[0].fertilizer_schedule
                    ? res.data.StationByStationID.items[0].fertilizer_schedule
                    : { cron: '', duration: '' },
                id:
                  res?.data?.StationByStationID?.items &&
                  res?.data?.StationByStationID?.items[0] &&
                  res.data.StationByStationID.items[0].id
                    ? res.data.StationByStationID.items[0].id
                    : '',
              } as SettingStationFormState;
            });
          }
        } catch (err) {
          console.log(err);
        }
      };
      getStationSetttings();
    }, [form.station_id]),
  );

  return (
    <AppContainer>
      <ScrollView>
        <Box w="80%" mx="auto">
          <Box alignItems="center" alignContent="center">
            <Heading color="white" my={4} size="xl">
              Station Settings
            </Heading>
          </Box>
          <Box>
            <TextInput
              title="Name"
              value={form.station_name}
              onChangeValue={value => {
                updateForm(prev => {
                  return { ...prev, station_name: value };
                });
              }}
            />
          </Box>
          <Box>
            <SchedulerInput
              title="Water Schedule"
              form={form}
              updateForm={updateForm}
              field="water_schedule"
            />
          </Box>
          <Box>
            <SchedulerInput
              title="Fertilizer Schedule"
              form={form}
              updateForm={updateForm}
              field="fertilizer_schedule"
            />
          </Box>
          <Box mb={12} mt={4}>
            <BaseButton
              title={route.params.create ? 'Create' : 'Update'}
              onPress={async () => {
                await submitForm();
              }}
            />
          </Box>
          <Box mb={4}>
            <BaseButton
              title="Back"
              onPress={() => {
                if (route.params.create) {
                  navigation.navigate('CreateStation');
                } else {
                  navigation.navigate('DetailStation', {
                    stationId: form.station_id,
                  });
                }
              }}
            />
          </Box>
          <Box mb={12}>
            <BaseButton
              title="Home"
              onPress={() => navigation.navigate('Home')}
            />
          </Box>
        </Box>
      </ScrollView>
    </AppContainer>
  );
};
