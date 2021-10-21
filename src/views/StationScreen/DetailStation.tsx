import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { API, Auth, graphqlOperation, PubSub } from 'aws-amplify';
import { Box, Heading, ScrollView, Text, VStack } from 'native-base';
import React, { FunctionComponent, useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form/TextInput';
import { AppContainer } from '../../container';
import { stationDataByStationID } from '../../graphql/queries';
import {
  AppDrawerParamList,
  StationScreenParamList,
} from '../../types/AppRouteType';

type DetailStationScreenProp = RouteProp<
  StationScreenParamList,
  'DetailStation'
>;

type StationDataProp = {
  time: string;
  light_intensity: string;
  soil_moisture: string;
  rain_percentage: string;
  humidity_level: string;
  temperature: string;
};
export const DetailStation: FunctionComponent = () => {
  const [water, updateWater] = useState<number>(0);
  const [fertilizer, updateFertilizer] = useState<number>(0);
  const [stationData, updateStationData] = useState<StationDataProp>({
    time: '',
    light_intensity: '',
    soil_moisture: '',
    rain_percentage: '',
    humidity_level: '',
    temperature: '',
  });
  const navigation = useNavigation<AppDrawerParamList>();

  const route = useRoute<DetailStationScreenProp>();

  useFocusEffect(
    useCallback(() => {
      const pub = PubSub.subscribe(
        `device/${route.params.stationId}/data`,
      ).subscribe({
        next: dataReceived => {
          updateStationData(dataReceived.value);
        },
        error: error => console.error(error),
        complete: () => console.log('Done'),
      });
      const stationSensorData = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          if (user) {
            const data = await API.graphql(
              graphqlOperation(stationDataByStationID, {
                station_id: route.params.stationId,
                sortDirection: 'DESC',
                limit: 1,
              }),
            );
            if (data.data.StationDataByStationID.items.length > 0) {
              const resData =
                data.data.StationDataByStationID.items[0].station_data.replace(
                  /'/g,
                  '"',
                );
              const sensorData = JSON.parse(resData);
              console.log(sensorData);
              updateStationData({
                ...sensorData,
                time: data.data.StationDataByStationID.items[0].createdAt,
              });
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
      stationSensorData();

      return () => {
        pub.unsubscribe();
      };
    }, [route.params.stationId]),
  );

  const triggerStationControl = (type: string) => {
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
        ? `trigger/${route.params.stationId}/water`
        : `trigger/${route.params.stationId}/fertilizer`,
      {
        type,
        duration: type === 'water' ? water : fertilizer,
      },
    ).then(res => {
      console.log(res);
      Alert.alert('Triggered', 'Triggered Successfully');
    });
  };

  return (
    <AppContainer>
      <ScrollView>
        <VStack space={6} flex={1}>
          <Box
            borderRadius="lg"
            alignItems="center"
            alignSelf="center"
            mb={6}
            mt={12}
            mx={2}
            bgColor="primaryGray"
            shadow={9}
            width="80%"
          >
            <Box px={4} my={8}>
              <Text bold color="white">
                ID: {route.params.stationId}
              </Text>
              <Text bold color="white">
                Humidity Level:{' '}
                {stationData.humidity_level
                  ? `${parseFloat(stationData.humidity_level).toFixed(2)}%RH`
                  : stationData.humidity_level}
              </Text>
              <Text bold color="white">
                Light Intensity:
                {stationData.light_intensity
                  ? `${parseFloat(stationData.light_intensity).toFixed(2)} HUF`
                  : stationData.light_intensity}
              </Text>
              <Text bold color="white">
                Rain Percentage:
                {stationData.rain_percentage
                  ? `${parseFloat(stationData.rain_percentage).toFixed(2)}%`
                  : stationData.rain_percentage}
              </Text>
              <Text bold color="white">
                Soil Moisture:
                {stationData.soil_moisture
                  ? `${parseFloat(stationData.soil_moisture).toFixed(2)}%`
                  : stationData.soil_moisture}
              </Text>
              <Text bold color="white">
                Time: {stationData.time ? stationData.time : ''}
              </Text>
              <Text bold color="white">
                Temperature:{' '}
                {stationData.temperature
                  ? `${stationData.temperature}\u00b0C`
                  : stationData.temperature}
              </Text>
            </Box>
          </Box>

          <BaseButton
            title="Settings"
            onPress={() => {
              navigation.navigate('SettingStation', {
                stationId: route.params.stationId,
                create: false,
              });
            }}
          />

          <Box mx="auto">
            <Heading color="white">Station Triggers</Heading>
          </Box>

          <Box w="80%" mx="auto">
            <TextInput
              title="Watering Duration(Second)"
              value={water.toString()}
              onChangeValue={(value: string) => {
                updateWater(
                  value === '' || parseInt(value, 10) <= 0
                    ? 0
                    : parseInt(value, 10),
                );
              }}
            />
            <Box my={2}>
              <BaseButton
                title="Trigger Watering"
                onPress={() => triggerStationControl('water')}
              />
            </Box>
          </Box>
          <Box w="80%" mx="auto">
            <TextInput
              title="Fertilizer Duration(Second)"
              value={fertilizer.toString()}
              onChangeValue={(value: string) => {
                updateFertilizer(
                  value === '' || parseInt(value, 10) <= 0
                    ? 0
                    : parseInt(value, 10),
                );
              }}
            />
            <Box my={2}>
              <BaseButton
                title="Trigger Fertilizer"
                onPress={() => triggerStationControl('fertilizer')}
              />
            </Box>
          </Box>

          <Box w="80%" mx="auto" mb={6}>
            <BaseButton
              title="Back"
              onPress={() => navigation.navigate('DashboardStation')}
            />
          </Box>
        </VStack>
      </ScrollView>
    </AppContainer>
  );
};
