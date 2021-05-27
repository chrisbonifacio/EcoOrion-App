import {
  Button,
  Card,
  CardItem,
  Container,
  Input,
  Label,
  Text,
} from 'native-base';
import React, {useState} from 'react';

export const StationDashboard = ({navigation, route}) => {
  const [water, updateWater] = useState('');
  const [fretilizer, updateFretilizer] = useState('');
  return (
    <Container>
      <Text>Station Dashboard: route.params</Text>
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

      <Label style={{margin: 20, marginBottom: 10}}>Water Duration</Label>
      <Input
        style={{marginLeft: 20, marginRight: 20}}
        value={water}
        placeholder="(Seconds)"
        onChangeText={value => {
          updateWater(value);
        }}
      />
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
        <Text>Trigger Watering</Text>
      </Button>

      <Label style={{margin: 20, marginBottom: 10}}>Fertilizer Schedule</Label>
      <Input
        style={{marginLeft: 20, marginRight: 20}}
        value={water}
        placeholder="(Seconds)"
        onChangeText={value => {
          updateWater(value);
        }}
      />
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
        <Text>Trigger Watering</Text>
      </Button>
    </Container>
  );
};
