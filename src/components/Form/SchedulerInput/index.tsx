import { Box, FormControl, HStack, Input, Radio, Text } from 'native-base';
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import {
  cronType,
  SettingStationFormState,
} from '../../../types/view/SettingScreen';
import { TextInput } from '../TextInput';

type SchedulerInputProp = {
  title: string;
  form: SettingStationFormState;
  updateForm: Dispatch<SetStateAction<SettingStationFormState>>;
  field: string;
};

type dayInput = {
  all: string;
  day: string;
};

type timeInput = {
  all: string;
  time: string;
};
export const SchedulerInput: FunctionComponent<SchedulerInputProp> = ({
  title,
  form,
  updateForm,
  field,
}) => {
  const [duration, updateDuration] = useState('');
  const [days, updateDays] = useState<dayInput>({
    all: '',
    day: '',
  });
  const [times, updateTimes] = useState<timeInput>({
    all: '',
    time: '',
  });
  useEffect(() => {
    const data = form[field] as cronType;
    updateDuration(data.duration);
    updateDuration(data.duration.toString());
    if (data.cron) {
      updateDays(prev => {
        const dayNumeric = data.cron.split(' ')[4].split(',');
        let dayString = '';
        dayNumeric.forEach((element: string) => {
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
          all: data.cron.split(' ')[4] === '*' ? 'true' : 'false',
        };
      });
      updateTimes(prev => {
        return {
          ...prev,
          all: data.cron.split(' ')[1] === '*' ? 'true' : 'false',
          time: data.cron.split(' ')[1] === '*' ? '' : data.cron.split(' ')[1],
        };
      });
    }
  }, [field, form]);
  return (
    <Box my={8}>
      <Text color="white" bold fontSize="lg">
        {title}
      </Text>
      <TextInput
        title="Duration(Second)"
        value={duration}
        onChangeValue={(value: string) => {
          updateForm(prev => {
            const prevState = prev[field] as cronType;
            prevState.duration = value;
            return prev;
          });
          updateDuration(value);
        }}
      />
      <FormControl>
        <FormControl.Label
          _text={{
            color: 'white',
          }}
        >
          Days
        </FormControl.Label>
        <Radio.Group
          value={days.all}
          name="daysRadioGroup"
          onChange={(value: string) => {
            if (value === 'true') {
              updateDays(prev => {
                return { ...prev, all: 'true' };
              });
              updateForm(prev => {
                const prevState = prev[field] as cronType;
                const cronState = prevState.cron.split(' ');
                cronState[4] = '*';
                prevState.cron = cronState.join(' ');
                prev[field] = prevState;
                return prev;
              });
            } else if (value === 'false') {
              updateDays(prev => {
                return { ...prev, all: 'false' };
              });
            }
          }}
        >
          <HStack justifyContent="space-between" w="100%" mb={2}>
            <Radio value="true" accessibilityLabel="Every Days">
              <Text color="white" ml={2}>
                Every Day
              </Text>
            </Radio>
            <Radio
              value="false"
              accessibilityLabel="Specify days to trigger (ie."
            >
              <Text color="white" ml={2}>
                Custom
              </Text>
            </Radio>
          </HStack>
        </Radio.Group>
        <Input
          value={days.all === 'true' ? '' : days.day}
          isDisabled={days.all === 'true'}
          _focus={{
            borderColor: 'primaryGreen',
          }}
          _disabled={{
            bgColor: 'bgHeader',
            opacity: '0.5',
          }}
          color="white"
          selectionColor="primaryGreen"
          autoCapitalize="none"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={value => {
            updateDays(prev => {
              return { ...prev, day: value };
            });
            updateForm(prev => {
              const dataday = prev[field] as cronType;
              const cronState = dataday.cron.split(' ');
              let newCronState = value
                .toLowerCase()
                .replace(/\s/g, '')
                .split(',');
              newCronState = [...new Set(newCronState)];
              let newCronString = '';
              newCronState.map((element: string) => {
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
                return newCronString;
              });
              newCronString = newCronString.slice(0, -1);
              cronState[4] = newCronString;
              dataday.cron = cronState.join(' ');
              prev[field] = dataday;
              return prev;
            });
          }}
        />
      </FormControl>

      <FormControl>
        <FormControl.Label
          _text={{
            color: 'white',
          }}
        >
          Times
        </FormControl.Label>
        <Radio.Group
          value={times.all}
          name="timesRadioGroup"
          onChange={(value: string) => {
            if (value === 'true') {
              updateTimes(prev => {
                return { ...prev, all: 'true' };
              });
              updateForm(prev => {
                const prevState = prev[field] as cronType;
                const cronState = prevState.cron.split(' ');
                cronState[1] = '*';
                prevState.cron = cronState.join(' ');
                prev[field] = prevState;
                return prev;
              });
            } else if (value === 'false') {
              updateTimes(prev => {
                return { ...prev, all: 'false' };
              });
            }
          }}
        >
          <HStack justifyContent="space-between" w="100%" mb={2}>
            <Radio value="true" accessibilityLabel="Every Times">
              <Text color="white" ml={2}>
                Every Time
              </Text>
            </Radio>
            <Radio
              value="false"
              accessibilityLabel="Specify times to trigger (ie."
            >
              <Text color="white" ml={2}>
                Custom
              </Text>
            </Radio>
          </HStack>
        </Radio.Group>
        <Input
          value={times.all === 'true' ? '' : times.time}
          isDisabled={times.all === 'true'}
          _focus={{
            borderColor: 'primaryGreen',
          }}
          _disabled={{
            bgColor: 'bgHeader',
            opacity: '0.5',
          }}
          color="white"
          selectionColor="primaryGreen"
          autoCapitalize="none"
          returnKeyType="next"
          blurOnSubmit={false}
          onChangeText={value => {
            const value_array = value
              .toLowerCase()
              .replace(/\s/g, '')
              .replace(/[a-z]/g, '')
              .split(',')
              .filter((val: string) => {
                if (parseInt(val, 10) >= 0 && parseInt(val, 10) <= 24) {
                  return val;
                }
                return undefined;
              });
            updateForm(prev => {
              const timeData = prev[field] as cronType;
              const cronState = timeData.cron.split(' ');
              cronState[1] = [...new Set(value_array)].toString();
              timeData.cron = cronState.join(' ');
              return prev;
            });
            updateTimes(prev => {
              return { ...prev, time: value };
            });
          }}
        />
      </FormControl>
    </Box>
  );
};
