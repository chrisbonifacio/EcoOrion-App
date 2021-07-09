import {Box, Center, Heading, VStack} from 'native-base';
import React, {useState} from 'react';

import {DefaultButton} from '../../component/Button';
import {TextInput} from '../../component/Form/TextInput';
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
        <TextInput
          title="Station ID"
          triggerFunction={value => {
            updateStationID(value);
          }}
          value={stationID}
        />
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
