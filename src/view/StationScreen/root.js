import {useFocusEffect} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {Box, Image, Spacer, Text, VStack} from 'native-base';
import React, {useState} from 'react';

import {listStations} from '../../api';
import StationImage from '../../assets/station.jpg';
import {DefaultButton} from '../../component/Button';
import {AppContainer} from '../../container/App';
export const StationRoot = ({navigation}) => {
  const [stations, updateStations] = useState([]);
  let index = 0;
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
          bgColor="default.primary"
          shadow={9}>
          <Box px={16} my={16}>
            <Text bold color="white" fontSize="3xl">
              Stations
            </Text>
            <Image source={StationImage} size={'xl'} alt="Station Iamge" />
          </Box>
        </Box>
        <Spacer flex={1} />
        <Box margin={3}>
          {stations.map(station => {
            index += 1;
            return (
              <DefaultButton
                key={station.station_id + '_' + index}
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
