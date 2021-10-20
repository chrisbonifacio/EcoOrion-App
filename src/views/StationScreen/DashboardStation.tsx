import { useNavigation } from '@react-navigation/native';
import { Box } from 'native-base';
import React, { FunctionComponent } from 'react';

import { BaseButton } from '../../components/Button';
import { AppContainer } from '../../container';
import { AppDrawerParamList } from '../../types/AppRouteType';

export const DashboardStation: FunctionComponent = () => {
  const navigation = useNavigation<AppDrawerParamList>();

  return (
    <AppContainer>
      <Box _text={{ color: 'white' }}>DashboardStation</Box>
      <BaseButton
        title="Create Station"
        onPress={() => navigation.navigate('CreateStation')}
      />
      <BaseButton
        title="Setting Station"
        onPress={() => navigation.navigate('SettingStation')}
      />
      <BaseButton
        title="Detail Station"
        onPress={() => navigation.navigate('DetailStation')}
      />
      <BaseButton title="Home" onPress={() => navigation.navigate('Home')} />
    </AppContainer>
  );
};
