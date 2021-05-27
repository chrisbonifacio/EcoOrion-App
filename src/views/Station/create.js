import {useFocusEffect} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  Header,
  Input,
  Item,
  Label,
  Text,
} from 'native-base';
import React, {useState} from 'react';

export const StationCreate = ({navigation}) => {
  const [stationID, updateStationID] = useState([]);
  return (
    <Container>
      <Card>
        <CardItem>
          <Text>Create Station</Text>
        </CardItem>
        <Form>
          <Item stackedLabel>
            <Label>Station ID</Label>
            <Input
              value={stationID}
              onChangeText={value => updateStationID(value)}
            />
          </Item>
        </Form>
      </Card>
      <Button
        style={{margin: 20}}
        full
        rounded
        onPress={() => {
          navigation.navigate('Station', {
            screen: 'StationDetail',
            params: {
              stationID: stationID,
              create: true,
            },
          });
        }}>
        <Text>Continue</Text>
      </Button>
    </Container>
  );
};
