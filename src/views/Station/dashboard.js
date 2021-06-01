import {API, PubSub} from 'aws-amplify';
import {
  Button,
  Card,
  CardItem,
  Container,
  Input,
  Label,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

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

  PubSub.subscribe(`device/${route.params.station.station_id}/data`).subscribe({
    next: data => {
      updateStationData(data.value);
    },
    error: error => console.error(error),
    close: () => console.log('Done'),
  });

  const triggerStationControl = type => {
    if (
      (type === 'water' && water === 0) ||
      (type === 'fertilizer' && fertilizer === 0) ||
      (type !== 'fertilizer' && type !== 'water')
    ) {
      Alert.alert('Error', 'Please insert the duration you want to trigger');
      return;
    }

    PubSub.publish('trigger/' + route.params.station.station_id, {
      type: type,
      duration: type === 'water' ? water : fertilizer,
    }).then(() => {
      Alert.alert('Triggered', 'Triggered Successfully');
    });
  };

  return (
    <Container>
      <Text>Station Dashboard: {route.params.station.station_id}</Text>
      <Text>Station Humidity Level: {stationData.humidity_level}</Text>
      <Text>Station Light Intensity: {stationData.light_intensity}</Text>
      <Text>Station Rain Percentage: {stationData.rain_percentage}</Text>
      <Text>Station Soil Moisture: {stationData.soil_moisture}</Text>
      <Text>Station Time: {stationData.time}</Text>
      <Button
        style={{margin: 20}}
        full
        rounded
        onPress={() => {
          navigation.navigate('Station', {
            screen: 'StationDetail',
            params: {
              stationID: route.params.station.station_id,
              create: false,
            },
          });
        }}>
        <Text>Settings</Text>
      </Button>
      <Card>
        <CardItem>
          <Text>Watering Triggers</Text>
        </CardItem>
      </Card>

      <Label style={{margin: 20}}>Water Duration</Label>
      <Input
        keyboardType="numeric"
        style={{marginLeft: 20, marginRight: 20}}
        value={water.toString()}
        placeholder="(Seconds)"
        onChangeText={value => {
          updateWater(isNaN(value) || value === '' ? 0 : parseInt(value, 10));
        }}
      />
      <Button
        style={{margin: 20}}
        full
        rounded
        onPress={() => {
          triggerStationControl('water');
        }}>
        <Text>Trigger Watering</Text>
      </Button>

      <Label style={{margin: 20, marginBottom: 10}}>Fertilizer Schedule</Label>
      <Input
        keyboardType="numeric"
        style={{marginLeft: 20, marginRight: 20}}
        value={fertilizer.toString()}
        placeholder="(Seconds)"
        onChangeText={value => {
          updateFertilizer(
            isNaN(value) || value === '' ? 0 : parseInt(value, 10),
          );
        }}
      />
      <Button
        style={{margin: 20}}
        full
        rounded
        onPress={() => {
          triggerStationControl('fertilizer');
        }}>
        <Text>Trigger Watering</Text>
      </Button>
    </Container>
  );
};
