import {FormControl, Input} from 'native-base';
import React from 'react';

export const TextInput = ({value, triggerFunction, title}) => {
  return (
    <FormControl>
      <FormControl.Label _text={{color: 'muted.700'}}>
        {title}
      </FormControl.Label>
      <Input value={value} onChangeText={triggerFunction} />
    </FormControl>
  );
};
