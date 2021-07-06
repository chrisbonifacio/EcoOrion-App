import {Box} from 'native-base';
import React from 'react';

import {StationHeader} from '../../component/Header';
export const StationContainer = ({children, title, backButton}) => {
  return (
    <Box flex={1} safeArea bgColor="green.900">
      <StationHeader title={title} backButton={backButton} />
      <Box flex={1} bgColor="green.100">
        {children}
      </Box>
    </Box>
  );
};
