// src/screens/RegistrationScreen.tsx

import React, { useState } from 'react';
import { Text, VStack, Center, Alert } from 'native-base';
import { registerUser } from '../services/auth';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';

function RegistrationScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    const result = await registerUser(email, password);
    if (result.success) {
      navigation.navigate('Login');
    } else {
      setError(result.error || 'Registration failed');
    }
  };

  return (
    <Center flex={1}>
      <VStack space={4} width="80%">
        <Text fontSize="2xl" mb={5}>Register</Text>
        <EmailInput value={email} onChangeText={setEmail} />
        <PasswordInput value={password} onChangeText={setPassword} />
        <CustomButton title="Register" onPress={handleRegister} bgColor="#000">
            Register
        </CustomButton>
        <CustomButton title="Already have an account? Login" variant="link" onPress={() => navigation.navigate('Login')}>
            Already have an account? Login
        </CustomButton>
        {error && <Alert status="error"><Alert.Icon /><Alert>{error}</Alert></Alert>}
      </VStack>
    </Center>
  );
}

export default RegistrationScreen;
