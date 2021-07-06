import {ArrowBackIcon, Box, Button, Heading, HStack} from 'native-base';
import React from 'react';

export const StationHeader = ({title, backButton}) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      bgColor="green.900">
      <Button variant="ghost" color="white" onPress={backButton}>
        <ArrowBackIcon color="white" />
      </Button>
      <Heading color="white">{title ? title : 'Header'}</Heading>
      <Box mx={8} />
    </HStack>
  );
};
