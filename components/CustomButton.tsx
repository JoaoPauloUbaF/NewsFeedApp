// src/components/CustomButton.tsx

import React from 'react';
import { Button } from 'native-base';

interface CustomButtonProps {
  colorScheme?: string;
  [x: string]: any;  // This allows for other props like 'onPress', 'variant', etc.
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, colorScheme = "teal", ...props }) => {
  return (
    <Button colorScheme={colorScheme} width="100%" height="15%" {...props}>
      {children}
    </Button>
  );
}

export default CustomButton;
