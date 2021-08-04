import {FormControl, Input} from 'native-base';
import React from 'react';

export const TextInput = ({value, triggerFunction, title, disabled}) => {
  return (
    <FormControl>
      <FormControl.Label _text={{color: 'white'}}>{title}</FormControl.Label>
      {disabled ? (
        <Input
          style={{color: '#FFF'}}
          _focus={{
            color: 'white',
          }}
          _disabled={{
            bgColor: 'gray.700',
            color: 'white',
          }}
          value={value}
          isDisabled
          onChangeText={triggerFunction}
        />
      ) : (
        <Input
          style={{color: '#FFF'}}
          _focus={{
            color: 'white',
          }}
          value={value}
          onChangeText={triggerFunction}
        />
      )}
    </FormControl>
  );
};
