import {Box, Button, Text} from 'native-base';
import React from 'react';

export const DefaultButton = ({triggerFunction, title}) => {
  return (
    <Box my={4} mx={4}>
      <Button colorScheme="teal" onPress={triggerFunction}>
        <Text color="white" bold fontSize="lg">
          {title}
        </Text>
      </Button>
    </Box>
  );
};
