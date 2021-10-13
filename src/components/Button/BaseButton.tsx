import { Box, Button, Text } from 'native-base';
import React, { FunctionComponent } from 'react';

interface BaseButtonProps {
  title: string;
  triggerFunction: () => void;
}
export const BaseButton: FunctionComponent<BaseButtonProps> = ({
  triggerFunction,
  title,
}) => {
  return (
    <Box my={4} mx={4}>
      <Button onPress={triggerFunction}>
        <Text color="white" bold fontSize="lg">
          {title}
        </Text>
      </Button>
    </Box>
  );
};
