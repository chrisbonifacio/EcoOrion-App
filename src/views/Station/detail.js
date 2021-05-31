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

import {ByStationIDAndUserID, createStation, updateStation} from '../../api';
import {ScheduleInput} from '../../component/Form/Scheduler';
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
    <Container>
      <Content style={{padding: 10}}>
        <Card>
          <CardItem header>
            <Text>
              {create ? 'Station Creating: ' : 'Station Details: '}
              {state.station_id}
            </Text>
          </CardItem>
        </Card>
        <Item>
          <Label style={{marginLeft: 20, marginRight: 20}}>Name</Label>
          <Input
            style={{marginLeft: 20, marginRight: 20}}
            value={state.station_name}
            onChangeText={value =>
              updateState(prev => {
                return {...prev, station_name: value};
              })
            }
          />
        </Item>
        <Label style={{margin: 20, marginBottom: 10}}>Water Schedule</Label>
        <ScheduleInput
          state={state}
          updateState={updateState}
          field="water_schedule"
        />
        <Label style={{margin: 20, marginBottom: 10}}>
          Fertilizer Schedule
        </Label>
        <ScheduleInput
          state={state}
          updateState={updateState}
          field="fertilizer_schedule"
        />
        <Button
          style={{marginTop: 20, marginBottom: 50}}
          full
          rounded
          onPress={async () => {
            await submitForm();
          }}>
          <Text>{create ? 'Create' : 'Update'}</Text>
        </Button>
      </Content>
    </Container>
  );
};
