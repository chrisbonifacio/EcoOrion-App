import { Button } from 'native-base';
import React, { FunctionComponent, ReactNode } from 'react';

interface IconButtonProps {
  children: ReactNode;
  onPress: () => void;
}

export const IconButton: FunctionComponent<IconButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <Button
      my={2}
      mx={2}
      rounded="xl"
      onPress={onPress}
      bgColor="transparent"
      _pressed={{ bg: 'bgGreen' }}
    >
      {children}
    </Button>
  );
};
