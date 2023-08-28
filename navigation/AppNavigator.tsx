// src/navigation/AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

// Import your screens
import LoginScreen from '../screens/LoginScreen';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
// ... any other screens you have

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
