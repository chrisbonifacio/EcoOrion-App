import {Box, Center, FormControl, Heading, Input, VStack} from 'native-base';
import React, {useState} from 'react';

import {DefaultButton} from '../../component/Button';
import {StationContainer} from '../../container/Station';

export const StationCreate = ({navigation}) => {
  const [stationID, updateStationID] = useState([]);
  return (
    <StationContainer
      title="Create New Station"
      backButton={() => {
        navigation.navigate('Station', {screen: 'StationRoot'});
      }}>
      <VStack>
        <Box margin={3}>
          <Center>
            <Heading>Create Station</Heading>
          </Center>
        </Box>
        <FormControl>
          <Box margin={5}>
            <FormControl.Label>Station ID</FormControl.Label>
            <Input
              value={stationID}
              onChangeText={value => updateStationID(value)}
            />
          </Box>
        </FormControl>
      </VStack>
      <DefaultButton
        title="Continue"
        triggerFunction={() => {
          navigation.navigate('Station', {
            screen: 'StationDetail',
            params: {
              stationID: stationID,
              create: true,
            },
          });
        }}
      />
    </StationContainer>
  );
};
