import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { Heading, HStack, Icon } from 'native-base';
import React, { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetProfileCreated, updateEmail } from '../../redux/slice/appslice';
import { resetLoggedIn } from '../../redux/slice/authSlice';
import { RootState } from '../../redux/store';
import { IconButton } from '../Button';

interface useNavigationProps {
  openDrawer: () => void;
}
export const AppHeader: FunctionComponent = () => {
  const { openDrawer } = useNavigation<useNavigationProps>();
  const title = useSelector((state: RootState) => state.app.headerTitle);
  const dispatch = useDispatch();
  return (
    <HStack
      bgColor="bgHeader"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
    >
      <IconButton
        onPress={() => {
          openDrawer();
        }}
      >
        <Icon as={Entypo} name="menu" color="primaryGreen" />
      </IconButton>

      <Heading color="primaryGreen">{title}</Heading>

      <IconButton
        onPress={async () => {
          await Auth.signOut();
          dispatch(resetProfileCreated());
          dispatch(resetLoggedIn());
          dispatch(updateEmail(''));
        }}
      >
        <Icon as={Entypo} name="log-out" color="primaryGreen" />
      </IconButton>
    </HStack>
  );
};
