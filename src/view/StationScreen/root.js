import {useFocusEffect} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {Box, Spacer, Text, VStack} from 'native-base';
import React, {useState} from 'react';

import {listStations, stationByUserID} from '../../api';
import {DefaultButton} from '../../component/Button';
import {AppContainer} from '../../container/App';
export const StationRoot = ({navigation}) => {
  const [stations, updateStations] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      Auth.currentAuthenticatedUser().then(async user => {
        const getStation = await listStations();
        if (getStation.data.listStations.items.length > 0) {
          let newStations = [];
          getStation.data.listStations.items.forEach(element => {
            newStations.push(element);
          });
          updateStations(() => {
            return newStations;
          });
        }

        // const getStation = await stationByUserID(user.attributes.email);
        // if (getStation.data.StationByUserID.items.length > 0) {
        //   let newStations = [];
        //   getStation.data.StationByUserID.items.forEach(element => {
        //     newStations.push(element);
        //   });
        //   updateStations(() => {
        //     return newStations;
        //   });
        // }
      });
      // const unsubscribe = API.subscribe(userId, user => setUser(user));
      // return () => unsubscribe();
    }, []),
  );
  return (
    <AppContainer navigation={navigation} title="Stations">
      <VStack flex={1}>
        <Box
          border={1}
          borderRadius="lg"
          alignItems="center"
          alignSelf="center"
          my={8}
          mx={4}
          bgColor="green.800"
          shadow={9}>
          <Box px={8} my={16}>
            <Text bold color="white" fontSize="3xl">
              Stations
            </Text>
          </Box>
        </Box>
        <Spacer flex={1} />
        <Box margin={3}>
          {stations.map(station => {
            return (
              <DefaultButton
                key={station.station_id}
                title={station.station_name}
                triggerFunction={() =>
                  navigation.navigate('Station', {
                    screen: 'StationDashboard',
                    params: {
                      station: station,
                    },
                  })
                }
              />
            );
          })}
          <DefaultButton
            title="Create Station"
            triggerFunction={() => navigation.navigate('StationCreate')}
          />
          <DefaultButton
            title="Home"
            triggerFunction={() => navigation.navigate('Home')}
          />
        </Box>
      </VStack>
    </AppContainer>
  );
};
