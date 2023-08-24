// src/store/reducers/authReducer.ts

import { createReducer } from '@reduxjs/toolkit';
import { loginSuccess, logoutSuccess, authError } from '../actions/authActions';

interface AuthState {
  isAuthenticated: boolean;
  user: null | { email: string };
  error: null | string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    })
    .addCase(logoutSuccess, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(authError, (state, action) => {
      state.error = action.payload;
    });
});

export default authReducer;
