import { FormControl, Input } from 'native-base';
import React, { FunctionComponent } from 'react';

interface TextInputProps {
  title: string;
  value: string;
  onChangeValue: (newValue: string) => void;
  type?: string;
  disabled?: boolean;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  title,
  value,
  onChangeValue,
  type,
  disabled,
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
        isDisabled={disabled}
        _disabled={{
          bgColor: 'bgHeader',
          opacity: '0.5',
        }}
      />
    </FormControl>
  );
};

TextInput.defaultProps = {
  type: '',
  disabled: false,
};
