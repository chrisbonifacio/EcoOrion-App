import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import React, { FunctionComponent } from 'react';

import { BaseButton } from '../../components/Button';
import { AppContainer } from '../../container';
import { AppDrawerParamList } from '../../types/AppRouteType';

export const DetailStation: FunctionComponent = () => {
  const navigation = useNavigation<AppDrawerParamList>();

  return (
    <AppContainer>
      <Box _text={{ color: 'white' }}>DetailStation</Box>
      <BaseButton
        title="Dashboard Station"
        onPress={() => navigation.navigate('DashboardStation')}
      />
      <BaseButton title="Home" onPress={() => navigation.navigate('Home')} />
    </AppContainer>
  );
};
