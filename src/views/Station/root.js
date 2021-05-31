import {useFocusEffect} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {Body, Button, Card, CardItem, Container, Text} from 'native-base';
import React, {useCallback, useState} from 'react';

import {stationByUserID} from '../../api';
export const StationRoot = ({navigation}) => {
  const [stations, updateStations] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      Auth.currentAuthenticatedUser().then(async user => {
        const getStation = await stationByUserID(user.attributes.email);
        console.log(getStation.data.StationByUserID.items.length);
        if (getStation.data.StationByUserID.items.length > 0) {
          let newStations = [];
          getStation.data.StationByUserID.items.forEach(element => {
            newStations.push(element);
          });
          updateStations(() => {
            return newStations;
          });
        }
      });
      // const unsubscribe = API.subscribe(userId, user => setUser(user));
      // return () => unsubscribe();
    }, []),
  );
  return (
    <Container>
      <Card>
        <CardItem>
          <Body>
            <Text>Stations</Text>
          </Body>
        </CardItem>
      </Card>
      {stations.map(station => {
        return (
          <Button
            key={station.station_id}
            full
            rounded
            primary
            style={{marginTop: 10}}
            onPress={() =>
              navigation.navigate('Station', {
                screen: 'StationDashboard',
                params: {
                  station: station,
                },
              })
            }>
            <Text>{station.station_name}</Text>
          </Button>
        );
      })}
      <Button
        full
        rounded
        dark
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('StationCreate')}>
        <Text>Create Station</Text>
      </Button>
      <Button
        full
        rounded
        primary
        style={{marginTop: 10}}
        onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </Button>
    </Container>
  );
};
