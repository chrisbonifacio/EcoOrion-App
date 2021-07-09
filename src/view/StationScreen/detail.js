import {Auth} from 'aws-amplify';
import {Box, KeyboardAvoidingView, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';

import {ByStationIDAndUserID, createStation, updateStation} from '../../api';
import {DefaultButton} from '../../component/Button';
import {ScheduleInput} from '../../component/Form/Scheduler';
import {TextInput} from '../../component/Form/TextInput';
import {StationContainer} from '../../container/Station';
export const StationDetail = ({navigation, route}) => {
  const [create, updateCreate] = useState(route.params.create);
  const [state, updateState] = useState({
    station_id: route.params.stationID,
    station_name: '',
    water_schedule: {
      cron: '0 * * * *',
      duration: '',
    },
    fertilizer_schedule: {
      cron: '0 * * * *',
      duration: '',
    },
    user_id: '',
  });

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(async user => {
      const user_email = user.attributes.email;
      updateState(prevState => {
        return {
          ...prevState,
          user_id: user.attributes.email,
        };
      });
      try {
        const res = await ByStationIDAndUserID(
          user_email,
          route.params.stationID,
        );
        if (res.data.StationByStationIDAndUserID.items.length > 0) {
          updateCreate(false);
          const dataLoaded = res.data.StationByStationIDAndUserID.items[0];
          updateState(prevState => {
            return {
              ...prevState,
              id: dataLoaded.id,
              station_name: dataLoaded.station_name,
              water_schedule: dataLoaded.water_schedule,
              fertilizer_schedule: dataLoaded.fertilizer_schedule,
            };
          });
        }
      } catch (err) {
        console.log(err);
      }
    });
  }, [route.params.stationID]);

  const submitForm = async () => {
    if (
      state.station_name === '' ||
      state.water_schedule.cron === '' ||
      state.fertilizer_schedule.duration === '' ||
      state.fertilizer_schedule.cron === '' ||
      state.fertilizer_schedule.duration === ''
    ) {
      Alert.alert(
        'Error',
        'Please fill in all the fields as they are mandatory',
      );
      return;
    }

    if (create) {
      try {
        const res = await createStation({
          ...state,
        });
        if (res.data) {
          Alert.alert('Created', 'Station has been created', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Station', {
                  screen: 'StationRoot',
                });
              },
            },
          ]);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await updateStation({
          ...state,
        });
        if (res.data) {
          Alert.alert('Created', 'Station has been created', [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Station', {
                  screen: 'StationRoot',
                });
              },
            },
          ]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <StationContainer
      // title={route.params.station.station_name}
      title={state.station_id}
      backButton={() => {
        navigation.navigate('Station', {screen: 'StationRoot'});
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}>
        <ScrollView>
          <Box my={2} mx={4}>
            <Text bold fontSize="lg">
              {create ? 'Station Creating: ' : 'Station Details: '}
              {state.station_id}
            </Text>
            <Box my={4}>
              <TextInput
                title="Name"
                value={state.station_name}
                triggerFunction={value =>
                  updateState(prev => {
                    return {...prev, station_name: value};
                  })
                }
              />
            </Box>
            <ScheduleInput
              title="Water Schedule"
              state={state}
              updateState={updateState}
              field="water_schedule"
            />
            <ScheduleInput
              title="Fertilizer Schedule"
              state={state}
              updateState={updateState}
              field="fertilizer_schedule"
            />
          </Box>
          <DefaultButton
            title={create ? 'Create' : 'Update'}
            triggerFunction={async () => {
              await submitForm();
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </StationContainer>
  );
};
