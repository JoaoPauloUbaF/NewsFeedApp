// components/PasswordInput.tsx

import React from 'react';
import { Input, InputLeftAddon, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import theme from '../styles/theme';

const PasswordInput = (props: any) => {
  return (
    <Input
      variant="outline"
      size={'lg'}
      placeholder="Senha"
      placeholderTextColor={theme.colors.gray[100]}
      type="password"
      {...props}
      InputLeftElement={
        <InputLeftAddon pointerEvents="none" bgColor={theme.colors.tertiary}>
          <Icon as={MaterialIcons} name="lock" size="lg" color="gray.300" />
        </InputLeftAddon>
      }
    />
  );
}

export default PasswordInput;
