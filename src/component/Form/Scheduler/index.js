import {
  Body,
  Card,
  CardItem,
  CheckBox,
  Content,
  Input,
  Item,
  Label,
  ListItem,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';

export const ScheduleInput = ({state, updateState, field}) => {
  const [duration, updateDuration] = useState(state[field].duration);
  const [days, updateDays] = useState({
    all: state[field].cron.split(' ')[4] === '*' ? true : false,
    day: '',
  });
  const [times, updateTimes] = useState({
    all: state[field].cron.split(' ')[1] === '*' ? true : false,
    time: '',
  });

  useEffect(() => {
    updateDuration(state[field].duration.toString());
    updateDays(prev => {
      const dayNumeric = state[field].cron.split(' ')[4].split(',');
      let dayString = '';
      dayNumeric.forEach(element => {
        if (element === '1') {
          dayString += 'mon,';
        } else if (element === '2') {
          dayString += 'tue,';
        } else if (element === '3') {
          dayString += 'wed,';
        } else if (element === '4') {
          dayString += 'thu,';
        } else if (element === '5') {
          dayString += 'fri,';
        } else if (element === '6') {
          dayString += 'sat,';
        } else if (element === '7') {
          dayString += 'sun,';
        }
      });
      return {
        ...prev,
        day: dayString,
        all: state[field].cron.split(' ')[4] === '*' ? true : false,
      };
    });
    updateTimes(prev => {
      return {
        ...prev,
        all: state[field].cron.split(' ')[3] === '*' ? true : false,
        time: state[field].cron.split(' ')[3],
      };
    });
  }, [state, field]);
  return (
    <Content>
      <Item>
        <Label style={{marginLeft: 20, marginRight: 20}}>Duration</Label>
        <Input
          style={{marginLeft: 20, marginRight: 20}}
          value={duration}
          placeholder="(Seconds)"
          onChangeText={value => {
            updateState(prev => {
              prev[field].duration = value;
              return prev;
            });
            updateDuration(value);
          }}
        />
      </Item>
      <Label style={{margin: 20}}>Days</Label>
      <ListItem>
        <CheckBox
          checked={days.all ? true : false}
          onPress={() => {
            updateDays({day: '', all: true});
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              cronState[4] = '*';
              prev[field].cron = cronState.join(' ');
              return prev;
            });
          }}
        />
        <Body>
          <Text>Every Day</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox
          checked={days.all ? false : true}
          onPress={() => {
            updateDays(prev => {
              return {...prev, all: false};
            });
          }}
        />
        <Body style={{marginLeft: 10}}>
          <Item>
            <Input
              disabled={days.all ? true : false}
              placeholder="sun, mon, tue, wed, thu, fri, sat"
              value={days.day}
              onChangeText={value => {
                updateDays(prev => {
                  return {...prev, day: value};
                });
                updateState(prev => {
                  const cronState = prev[field].cron.split(' ');
                  const newCronState = value
                    .toLowerCase()
                    .replaceAll(' ', '')
                    .split(',');
                  let newCronString = '';
                  newCronState.map(element => {
                    if (element === 'mon') {
                      newCronString += '1,';
                    } else if (element === 'tue') {
                      newCronString += '2,';
                    } else if (element === 'wed') {
                      newCronString += '3,';
                    } else if (element === 'thu') {
                      newCronString += '4,';
                    } else if (element === 'fri') {
                      newCronString += '5,';
                    } else if (element === 'sat') {
                      newCronString += '6,';
                    } else if (element === 'sun') {
                      newCronString += '7,';
                    }
                  });
                  newCronString = newCronString.slice(0, -1);
                  cronState[4] = newCronString;
                  prev[field].cron = cronState.join(' ');
                  return prev;
                });
              }}
            />
          </Item>
        </Body>
      </ListItem>
      <Label style={{margin: 20}}>times</Label>
      <ListItem>
        <CheckBox
          checked={times.all ? true : false}
          onPress={() => {
            updateTimes(prev => {
              return {...prev, all: true};
            });
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              cronState[3] = '*';
              prev[field].cron = cronState.join(' ');
              return prev;
            });
          }}
        />
        <Body>
          <Text>Hourly</Text>
        </Body>
      </ListItem>
      <ListItem>
        <CheckBox
          checked={times.all ? false : true}
          onPress={() => {
            updateTimes(prev => {
              return {...prev, all: false};
            });
          }}
        />
        <Body style={{marginLeft: 10}}>
          <Item>
            <Input
              disabled={times.all ? true : false}
              placeholder="1-24"
              value={times.time}
              keyboardType="numeric"
              onChangeText={value => {
                updateTimes(prev => {
                  return {...prev, time: value};
                });
                updateState(prev => {
                  const cronState = prev[field].cron.split(' ');
                  cronState[3] = value
                    .toLowerCase()
                    .replaceAll(' ', '')
                    .replace(/[a-z]/g, '');
                  prev[field].cron = cronState.join(' ');
                  return prev;
                });
              }}
            />
          </Item>
        </Body>
      </ListItem>
    </Content>
  );
};
