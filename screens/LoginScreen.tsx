// src/screens/LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, Input, VStack, Box, Center, Alert } from 'native-base';
import { loginUser } from '../services/auth';

function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const result = await loginUser(email, password);
    if (result.success) {
      navigation.navigate('NewsFeed');
    } else {
      setError(result.error || 'Login failed');
    }
  };

  return (
    <Center flex={1}>
      <VStack space={4} width="80%">
        <Text fontSize="2xl" mb={5}>Login</Text>
        <Input
          placeholder="Email"
          variant="outline"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          variant="outline"
          type="password"
          value={password}
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin}>
          Login
        </Button>
        <Button variant="link" onPress={() => navigation.navigate('Registration')}>
          Don't have an account? Register
        </Button>
        {error && <Alert status="error"><Alert.Icon /><Alert>{error}</Alert></Alert>}
      </VStack>
    </Center>
  );
}

export default LoginScreen;
