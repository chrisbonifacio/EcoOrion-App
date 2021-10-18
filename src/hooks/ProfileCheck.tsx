import { Box } from 'native-base';
import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ProfileComponent } from '../components/Profile';
import { BaseContainer } from '../container';
import { RootState } from '../redux/store';

interface ProfileCheckProps {
  children: ReactNode;
}
export const ProfileCheck: FunctionComponent<ProfileCheckProps> = ({
  children,
}) => {
  const profileCreated = useSelector(
    (state: RootState) => state.app.profileCreated,
  );

  const email = useSelector((state: RootState) => state.app.email);

  return (
    <>
      {profileCreated && children}
      {!profileCreated && (
        <BaseContainer>
          <ProfileComponent email={email} />
        </BaseContainer>
      )}
    </>
  );
};

export default ProfileCheck;
