// components/EmailInput.tsx

import React from 'react';
import { Input, InputLeftAddon, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const EmailInput = (props: any) => {
  return (
    <Input
      variant="outline"
      placeholder="Your Email"
      {...props}
      InputLeftElement={
        <InputLeftAddon pointerEvents="none">
          <Icon as={MaterialIcons} name="email" size="sm" color="gray.400" />
        </InputLeftAddon>
      }
    />
  );
}

export default EmailInput;
