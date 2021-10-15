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
    <Button onPress={onPress} bgColor="transparent">
      {children}
    </Button>
  );
};
