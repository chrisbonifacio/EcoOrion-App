import {ArrowBackIcon, Box, Button, Heading, HStack} from 'native-base';
import React from 'react';

export const StationHeader = ({title, backButton}) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      bgColor="default.bglight">
      <Button variant="ghost" color="default.primary" onPress={backButton}>
        <ArrowBackIcon color="default.primary" />
      </Button>
      <Heading color="default.primary">{title ? title : 'Header'}</Heading>
      <Box mx={8} />
    </HStack>
  );
};
