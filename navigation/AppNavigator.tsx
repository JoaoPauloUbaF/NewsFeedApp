// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import LoginScreen from '../screens/LoginScreen';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
// ... any other screens you have

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
