import React, { FunctionComponent } from 'react';

import { ProfileComponent } from '../../components/Profile';
import { AppContainer } from '../../container';

export const ProfileScreen: FunctionComponent = () => {
  return (
    <AppContainer>
      <ProfileComponent />
    </AppContainer>
  );
};

ProfileScreen.defaultProps = {
  email: '',
};
