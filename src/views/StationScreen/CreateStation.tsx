import { useNavigation } from '@react-navigation/native';
import { Box, Heading, ScrollView } from 'native-base';
import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BaseButton } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { AppContainer } from '../../container';
import { setLoading } from '../../redux/slice/appslice';
import { AppDrawerParamList } from '../../types/AppRouteType';

export const CreateStation: FunctionComponent = () => {
  const [stationID, updateStationID] = useState('');
  const navigation = useNavigation<AppDrawerParamList>();
  const dispatch = useDispatch();

  return (
    <AppContainer>
      <ScrollView>
        <Box w="80%" mx="auto" flex={1}>
          <Box alignItems="center" alignContent="center">
            <Heading color="white" my={4} size="xl">
              Register new station
            </Heading>
          </Box>
          <Box mt={24} alignContent="center" justifyContent="center">
            <TextInput
              title="Station ID"
              value={stationID}
              onChangeValue={value => {
                updateStationID(value);
              }}
            />
            <Box my={6}>
              <BaseButton
                title="Create Station"
                onPress={() => {
                  dispatch(setLoading());
                  navigation.navigate('SettingStation', {
                    stationId: stationID,
                    create: true,
                  });
                }}
              />
            </Box>
            <Box>
              <BaseButton
                title="Cancel"
                onPress={() => {
                  dispatch(setLoading());
                  navigation.navigate('DashboardStation');
                }}
              />
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </AppContainer>
  );
};
