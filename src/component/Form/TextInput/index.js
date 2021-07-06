import {FormControl, Input} from 'native-base';
import React from 'react';

export const TextInput = ({value, triggerFunction, title, disabled}) => {
  return (
    <FormControl>
      <FormControl.Label _text={{color: 'muted.700'}}>
        {title}
      </FormControl.Label>
      {disabled ? (
        <Input value={value} isDisabled onChangeText={triggerFunction} />
      ) : (
        <Input value={value} onChangeText={triggerFunction} />
      )}
    </FormControl>
  );
};
