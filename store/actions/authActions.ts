import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction<{ email: string }>('auth/loginSuccess');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const authError = createAction<string>('auth/authError');
