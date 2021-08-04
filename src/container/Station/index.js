import {Box} from 'native-base';
import React from 'react';

import {StationHeader} from '../../component/Header';
export const StationContainer = ({children, title, backButton}) => {
  return (
    <Box flex={1} safeArea bgColor="default.bglight">
      <StationHeader title={title} backButton={backButton} />
      <Box flex={1} bgColor="default.secondary">
        {children}
      </Box>
    </Box>
  );
};
