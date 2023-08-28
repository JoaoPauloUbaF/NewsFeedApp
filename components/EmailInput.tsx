// components/EmailInput.tsx

import React from 'react';
import { Input, InputLeftAddon, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

const EmailInput = (props: any) => {
  return (
    <Input
      size={'lg'}
      variant="outline"
      placeholder="Seu Email"
      placeholderTextColor={theme.colors.gray[100]}
      {...props}
      InputLeftElement={
        <InputLeftAddon pointerEvents="none" bgColor={theme.colors.tertiary}>
          <Icon as={MaterialIcons} name="email" size="lg" color="gray.300" />
        </InputLeftAddon>
      }
    />
  );
}

export default EmailInput;
