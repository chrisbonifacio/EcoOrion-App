import { Box, Button, Text } from 'native-base';
import React, { FunctionComponent } from 'react';

interface BaseButtonProps {
  title: string;
  onPress: () => void;
}
export const BaseButton: FunctionComponent<BaseButtonProps> = ({
  onPress,
  title,
}) => {
  return (
    <Button onPress={onPress} backgroundColor="primaryGreen">
      <Text color="white" bold fontSize="lg">
        {title}
      </Text>
    </Button>
  );
};
