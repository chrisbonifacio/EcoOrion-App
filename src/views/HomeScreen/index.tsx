import { Center, Text } from 'native-base';
import React, { FunctionComponent } from 'react';

import { AppContainer } from '../../container/AppContainer';

export const HomeScreen: FunctionComponent = () => {
  return (
    <AppContainer>
      <Center>
        <Text color="white">Home Screen</Text>
      </Center>
    </AppContainer>
  );
};
