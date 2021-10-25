/* eslint-disable global-require */
import { GraphQLResult } from '@aws-amplify/api';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { API, Auth } from 'aws-amplify';
import { Box, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React, { FunctionComponent, useCallback, useState } from 'react';

import { BaseButton } from '../../components/Button';
import { AppContainer } from '../../container';
import { listStations } from '../../graphql/queries';
import { ListStationsQuery } from '../../types/api';
import { AppDrawerParamList } from '../../types/AppRouteType';

export const DashboardStation: FunctionComponent = () => {
  const navigation = useNavigation<AppDrawerParamList>();

  const [stations, updateStations] = useState<
    Array<{
      __typename: 'Station';
      id: string;
      water_schedule: {
        __typename: 'Scheduler';
        cron: string;
        duration: number;
      };
      fertilizer_schedule: {
        __typename: 'Scheduler';
        cron: string;
        duration: number;
      };
      station_name: string;
      station_id: string;
      user_id: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>
  >([]);
  let index = 1;

  useFocusEffect(
    useCallback(() => {
      const getStation = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          if (user) {
            const data: GraphQLResult<ListStationsQuery> = (await API.graphql({
              query: listStations,
            })) as GraphQLResult<ListStationsQuery>;
            if (
              data?.data?.listStations?.items &&
              data.data.listStations.items.length > 0
            ) {
              updateStations(data.data.listStations.items);
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
      getStation();
    }, []),
  );
  return (
    <AppContainer>
      <ScrollView>
        <Box w="90%" mx="auto">
          <VStack space={4}>
            <Box
              w="90%"
              borderRadius="xl"
              alignItems="center"
              alignSelf="center"
              mt={6}
              mx="auto"
              bgColor="bgHeader"
              shadow={9}
              borderColor="bgHeader"
              pb={4}
            >
              <HStack alignItems="center" space={6}>
                <Image
                  source={require('../../assets/logo.png')}
                  size="md"
                  resizeMode="contain"
                  alt="Logo Image"
                />
                <Text bold color="white" fontSize="3xl">
                  Stations
                </Text>
              </HStack>
              <Image
                source={require('../../assets/station.jpg')}
                size="xl"
                alt="Station Image"
                style={{ width: '80%', height: 200 }}
                borderRadius="xl"
              />
            </Box>
            {stations.map(station => {
              index += 1;
              return (
                <Box w="80%" mx="auto" key={`${station?.station_id}_${index}`}>
                  <BaseButton
                    title={station?.station_name || 'Unknown Station'}
                    onPress={() =>
                      navigation.navigate('DetailStation', {
                        stationId: station?.station_id || '',
                      })
                    }
                  />
                </Box>
              );
            })}
            <Box w="80%" mx="auto">
              <BaseButton
                title="Register New Station"
                onPress={() => navigation.navigate('CreateStation')}
              />
            </Box>
            <Box w="80%" mx="auto">
              <BaseButton
                title="Home"
                onPress={() => navigation.navigate('Home')}
              />
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </AppContainer>
  );
};
