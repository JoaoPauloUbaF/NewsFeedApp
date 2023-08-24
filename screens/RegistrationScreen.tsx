// src/screens/RegistrationScreen.tsx

import React, { useState } from 'react';
import { Text, VStack, Center, Alert, KeyboardAvoidingView, ScrollView, Spacer, Box } from 'native-base';
import { registerUser } from '../services/auth';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';
import theme from '../styles/theme';
import { Platform } from 'react-native';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bgColor={theme.colors.secondary}>
        <Center flex={1} >
          <Spacer/>
          <VStack space={'md'} width="80%" flex={1} justifyContent="center">
            <Center>
              <Text  fontSize={32} fontFamily="Roboto-Bold" mb={'px'} color={theme.colors.gray[100]}>Sign Up</Text>
            </Center>
            <Box flex={0.01} justifyContent="flex-end" mb={5}/>
            <EmailInput value={email} onChangeText={setEmail} />
            <PasswordInput value={password} onChangeText={setPassword} />
            <CustomButton title="Sign Up" onPress={handleRegister} bgColor="#000">
                Sign Up
            </CustomButton>
             {error && <Alert status="error"><Alert.Icon/>{error}</Alert>}
            <Box flex={1} justifyContent={'flex-end'} mb={5}>
              <CustomButton title="Already have an account? Login" variant="link" onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: theme.colors.white}}>
                    Already have an account?
                    <Text fontFamily={'Roboto-Bold'} style={{color: theme.colors.black}}> Login</Text>
                  </Text>
              </CustomButton>
            </Box>
          </VStack>
        </Center>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegistrationScreen;
