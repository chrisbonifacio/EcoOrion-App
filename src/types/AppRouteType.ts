import {
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type StationScreenParamList = {
  DashboardStation: undefined;
  CreateStation: undefined;
  DetailStation: { stationId: string };
  SettingStation: { stationId: string; create: boolean };
};

export type AppScreenParamList = {
  Home: undefined;
  Profile: undefined;
  Web: undefined;
  Station: NavigatorScreenParams<StationScreenParamList>;
};

export type AppDrawerParamList = CompositeNavigationProp<
  DrawerNavigationProp<AppScreenParamList>,
  StackNavigationProp<StationScreenParamList>
>;

export type AppScreenPropList = CompositeScreenProps<
  DrawerScreenProps<AppScreenParamList>,
  StackScreenProps<StationScreenParamList>
>;
