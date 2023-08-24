import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </NativeBaseProvider>
  );
}
