import { FormControl, Input } from 'native-base';
import React, { FunctionComponent, MutableRefObject } from 'react';

interface TextInputProps {
  title: string;
  value: string;
  onChangeValue: (newValue: string) => void;
  type?: string;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  title,
  value,
  onChangeValue,
  type,
}) => {
  return (
    <FormControl>
      <FormControl.Label
        _text={{
          color: 'white',
        }}
      >
        {title}
      </FormControl.Label>
      <Input
        value={value}
        onChangeText={newValue => {
          onChangeValue(newValue);
        }}
        _focus={{
          borderColor: 'primaryGreen',
        }}
        color="white"
        selectionColor="primaryGreen"
        type={type}
        autoCapitalize="none"
        returnKeyType="next"
        blurOnSubmit={false}
      />
    </FormControl>
  );
};

TextInput.defaultProps = {
  type: '',
};
