import React, { FunctionComponent, ReactNode } from 'react';

interface ProfileCheckProps {
  children: ReactNode;
}
export const ProfileCheck: FunctionComponent<ProfileCheckProps> = ({
  children,
}) => {
  return <>{children}</>;
};

export default ProfileCheck;
