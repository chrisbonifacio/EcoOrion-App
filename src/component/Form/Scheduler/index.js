import {Box, FormControl, Input, Radio, Text} from 'native-base';
import React, {useEffect, useState} from 'react';

import {TextInput} from '../TextInput';
export const ScheduleInput = ({state, updateState, field, title}) => {
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
        time:
          state[field].cron.split(' ')[3] === '*'
            ? ''
            : state[field].cron.split(' ')[3],
      };
    });
  }, [state, field]);
  return (
    <Box>
      <Text bold fontSize="lg" mt={4} mb={2}>
        {title}
      </Text>

      <TextInput
        title="Duration(Second)"
        value={duration}
        triggerFunction={value => {
          updateState(prev => {
            prev[field].duration = value;
            return prev;
          });
          updateDuration(value);
        }}
      />

      <Box my={2} />
      <Text _text={{color: 'muted.700'}} mt={2}>
        Days
      </Text>
      <Radio.Group
        value={days.all}
        name="daysRadioGroup"
        onChange={value => {
          if (typeof value === 'boolean' && value) {
            updateDays(prev => {
              return {...prev, all: true};
            });
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              cronState[4] = '*';
              prev[field].cron = cronState.join(' ');
              return prev;
            });
          } else if (typeof value === 'boolean' && !value) {
            updateDays(prev => {
              return {...prev, all: false};
            });
          }
        }}>
        <Radio value={true} my={1} accessibilityLabel="Every Days">
          Every Day
        </Radio>
        <Radio
          value={false}
          my={1}
          accessibilityLabel="Specify days to trigger (ie.">
          Custom
        </Radio>
      </Radio.Group>

      <FormControl>
        <Input
          ml={2}
          isFullWidth
          variant="underlined"
          placeholder="sun, mon, tue, wed, thu, fri, sat"
          value={days.day}
          isDisabled={days.all}
          onChangeText={value => {
            updateDays(prev => {
              return {...prev, day: value};
            });
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              let newCronState = value
                .toLowerCase()
                .replace(/\s/g, '')
                .split(',');
              newCronState = [...new Set(newCronState)];
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
      </FormControl>
      <Box my={2} />

      <Text _text={{color: 'muted.700'}} mt={2}>
        Times
      </Text>
      <Radio.Group
        value={times.all}
        name="daysRadioGroup"
        onChange={value => {
          if (typeof value === 'boolean' && value) {
            updateTimes(prev => {
              return {...prev, all: true};
            });
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              cronState[3] = '*';
              prev[field].cron = cronState.join(' ');
              return prev;
            });
          } else if (typeof value === 'boolean' && !value) {
            updateTimes(prev => {
              return {...prev, all: false};
            });
          }
        }}>
        <Radio value={true} my={1} accessibilityLabel="Every Hour">
          Every Hour
        </Radio>
        <Radio
          value={false}
          my={1}
          accessibilityLabel="Specify hour to trigger (ie.">
          Custom
        </Radio>
      </Radio.Group>
      <FormControl>
        <Input
          ml={2}
          isFullWidth
          variant="underlined"
          placeholder="1-24                                             "
          value={times.time}
          isDisabled={times.all}
          onChangeText={value => {
            const value_array = value
              .toLowerCase()
              .replace(/\s/g, '')
              .replace(/[a-z]/g, '')
              .split(',')
              .filter(val => {
                if (val >= 0 && val <= 24) {
                  return val;
                }
              });
            updateState(prev => {
              const cronState = prev[field].cron.split(' ');
              cronState[3] = [...new Set(value_array)];
              prev[field].cron = cronState.join(' ');
              return prev;
            });
            updateTimes(prev => {
              return {...prev, time: value};
            });
          }}
        />
      </FormControl>
    </Box>
  );
};
