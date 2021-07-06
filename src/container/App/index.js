import {Box} from 'native-base';
import React from 'react';

import {AppHeader} from '../../component/Header';
export const AppContainer = ({navigation, children, title}) => {
  return (
    <Box flex={1} safeArea bgColor="green.900">
      <AppHeader navigation={navigation} title={title} />
      <Box flex={1} bgColor="green.100">
        {children}
      </Box>
    </Box>
  );
};
