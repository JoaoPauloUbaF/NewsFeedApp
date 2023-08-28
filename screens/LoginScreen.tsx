import React, { useState } from 'react';
import { Text, Button, VStack, Center, Alert, Box, Spacer, ScrollView, KeyboardAvoidingView } from 'native-base';
import theme from '../styles/theme';
import { loginUser } from '../services/auth';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '../components/CustomButton';
import { Platform } from 'react-native';

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bgColor={theme.colors.gray[500]}>
        <Center flex={1} >
          <Spacer/>
          <VStack space={"md"} width="80%" flex={1} justifyContent="center">
            <Center>
              <Text fontSize={32} fontFamily="Roboto-Bold" mb={"px"}>Login</Text>
            </Center>
            <Box flex={0.01} justifyContent="flex-end" mb={5}/>
            <EmailInput value={email} onChangeText={setEmail} />
            <PasswordInput value={password} onChangeText={setPassword} />
            <CustomButton title="Login" onPress={handleLogin} bgColor={theme.colors.primary}>
                <Text fontFamily="Roboto-Regular" color={'white'}>Entrar</Text> 
            </CustomButton>
            {error && <Alert status="error" width="100%"><Alert.Icon />{error}</Alert>}
          </VStack>
          <Box flex={1} justifyContent="flex-end" mb={5}>
            <Button variant="link" onPress={() => navigation.navigate('Registration')} colorScheme="secondary">
              <Text fontFamily="Roboto-Regular" color={theme.colors.quaternary}>Ainda não possui uma conta?
              <Text fontFamily={"Roboto-Bold"}> Cadastrar-se</Text>
              </Text>
            </Button>
          </Box>
        </Center>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
