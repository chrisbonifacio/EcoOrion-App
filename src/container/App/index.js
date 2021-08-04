import {Box} from 'native-base';
import React from 'react';

import {AppHeader} from '../../component/Header';
export const AppContainer = ({navigation, children, title}) => {
  return (
    <Box flex={1} safeArea bgColor="default.bglight">
      <AppHeader navigation={navigation} title={title} />
      <Box flex={1} bgColor="default.secondary">
        {children}
      </Box>
    </Box>
  );
};
