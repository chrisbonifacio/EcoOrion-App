import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type StationScreenParamList = {
  DashboardStation: undefined;
  CreateStation: undefined;
  DetailStation: undefined;
  SettingStation: undefined;
};

export type AppScreenParamList = {
  Home: undefined;
  Profile: undefined;
  Web: undefined;
  Station: StackScreenProps<StationScreenParamList, 'DashboardStation'>;
};

export type AppDrawerParamList = CompositeNavigationProp<
  DrawerNavigationProp<AppScreenParamList>,
  StackNavigationProp<StationScreenParamList>
>;
