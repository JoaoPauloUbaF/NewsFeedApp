// components/PasswordInput.tsx

import React from 'react';
import { Input, InputLeftAddon, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const PasswordInput = (props: any) => {
  return (
    <Input
      variant="outline"
      placeholder="Password"
      type="password"
      {...props}
      InputLeftElement={
        <InputLeftAddon pointerEvents="none">
          <Icon as={MaterialIcons} name="lock" size="sm" color="gray.400" />
        </InputLeftAddon>
      }
    />
  );
}

export default PasswordInput;
