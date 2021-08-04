import {Auth, PubSub} from 'aws-amplify';
import {
  Box,
  Center,
  Heading,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';

import {stationDataByStationID} from '../../api';
import {DefaultButton} from '../../component/Button';
import {TextInput} from '../../component/Form/TextInput';
import {StationContainer} from '../../container/Station';

export const StationDashboard = ({navigation, route}) => {
  const [water, updateWater] = useState(0);
  const [fertilizer, updateFertilizer] = useState(0);
  const [stationData, updateStationData] = useState({
    time: '',
    light_intensity: '',
    soil_moisture: '',
    rain_percentage: '',
    humidity_level: '',
  });

  useEffect(() => {
    const stationSensorData = async () => {
      try {
        const res = await stationDataByStationID(
          route.params.station.station_id,
        );
        if (res.data.StationDataByStationID.items.length > 0) {
          const resData =
            res.data.StationDataByStationID.items[0].station_data.replace(
              /'/g,
              '"',
            );
          const sensorData = JSON.parse(resData);
          updateStationData({
            ...sensorData,
            time: res.data.StationDataByStationID.items[0].createdAt,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    stationSensorData();
    PubSub.subscribe(
      `device/${route.params.station.station_id}/data`,
    ).subscribe({
      next: data => {
        updateStationData(data.value);
      },
      error: error => console.error(error),
      close: () => console.log('Done'),
    });
  }, [route.params.station.station_id]);

  const triggerStationControl = type => {
    if (
      (type === 'water' && water === 0) ||
      (type === 'fertilizer' && fertilizer === 0) ||
      (type !== 'fertilizer' && type !== 'water')
    ) {
      Alert.alert('Error', 'Please insert the duration you want to trigger');
      return;
    }

    PubSub.publish(
      type === 'water'
        ? 'trigger/' + route.params.station.station_id + '/water'
        : 'trigger/' + route.params.station.station_id + '/fertilizer',
      {
        type: type,
        duration: type === 'water' ? water : fertilizer,
      },
    ).then(res => {
      console.log(res);
      Alert.alert('Triggered', 'Triggered Successfully');
    });
  };

  return (
    <StationContainer
      title={route.params.station.station_name}
      backButton={() => {
        navigation.navigate('Station', {screen: 'StationRoot'});
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={60}>
        <ScrollView>
          <Box
            border={1}
            borderRadius="lg"
            alignItems="center"
            alignSelf="center"
            my={6}
            mx={2}
            bgColor="default.primary"
            shadow={9}
            width="90%">
            <Box px={4} my={8}>
              <Text bold color="white">
                Station Dashboard: {route.params.station.station_id}
              </Text>
              <Text bold color="white">
                Station Humidity Level:{' '}
                {stationData.humidity_level
                  ? parseFloat(stationData.humidity_level).toFixed(2)
                  : stationData.humidity_level}
              </Text>
              <Text bold color="white">
                Station Light Intensity:
                {stationData.light_intensity
                  ? parseFloat(stationData.light_intensity).toFixed(2)
                  : stationData.light_intensity}
              </Text>
              <Text bold color="white">
                Station Rain Percentage:
                {stationData.rain_percentage
                  ? parseFloat(stationData.rain_percentage).toFixed(2)
                  : stationData.rain_percentage}
              </Text>
              <Text bold color="white">
                Station Soil Moisture:
                {stationData.soil_moisture
                  ? parseFloat(stationData.soil_moisture).toFixed(2)
                  : stationData.soil_moisture}
              </Text>
              <Text bold color="white">
                Station Time: {stationData.time}
              </Text>
            </Box>
          </Box>
          <DefaultButton
            title="Settings"
            triggerFunction={() => {
              navigation.navigate('Station', {
                screen: 'StationDetail',
                params: {
                  station: route.params.station,
                  stationID: route.params.station.station_id,
                  create: false,
                },
              });
            }}
          />
          <Center mt={4}>
            <Heading color="default.primary">Station Triggers</Heading>
          </Center>
          <Box my={4} mx={4}>
            <TextInput
              title="Watering Duration(Second)"
              text="white"
              triggerFunction={value => {
                updateWater(
                  isNaN(value) || value === '' || parseInt(value, 10) <= 0
                    ? 0
                    : parseInt(value, 10),
                );
              }}
              value={water.toString()}
            />
          </Box>

          <DefaultButton
            title="Trigger Watering"
            triggerFunction={() => {
              triggerStationControl('water');
            }}
          />

          <Box my={4} mx={4}>
            <TextInput
              title="Fertilizer Duration(Second)"
              triggerFunction={value => {
                updateFertilizer(
                  isNaN(value) || value === '' || parseInt(value, 10) <= 0
                    ? 0
                    : parseInt(value, 10),
                );
              }}
              value={fertilizer.toString()}
            />
          </Box>
          <DefaultButton
            title="Trigger Fertilizer"
            triggerFunction={() => {
              triggerStationControl('fertilizer');
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </StationContainer>
  );
};
