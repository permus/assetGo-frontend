import { createAction, props } from '@ngrx/store';
import { User, AuthResponse } from '../../core/services/auth.service';

// Login Actions
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string; emailVerified?: boolean; userId?: number }>()
);

// Register Actions
export const register = createAction(
  '[Auth] Register',
  props<{ 
    first_name: string; 
    last_name: string; 
    company_name: string; 
    email: string; 
    password: string; 
    password_confirmation: string 
  }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: User; token: string }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);

// Logout Actions
export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
  '[Auth] Logout Failure',
  props<{ error: string }>()
);

// Forgot Password Actions
export const forgotPassword = createAction(
  '[Auth] Forgot Password',
  props<{ email: string }>()
);

export const forgotPasswordSuccess = createAction(
  '[Auth] Forgot Password Success',
  props<{ message: string }>()
);

export const forgotPasswordFailure = createAction(
  '[Auth] Forgot Password Failure',
  props<{ error: string }>()
);

// Reset Password Actions
export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ token: string; email: string; password: string; password_confirmation: string }>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success',
  props<{ message: string }>()
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: string }>()
);

// Email Verification Actions
export const verifyEmail = createAction(
  '[Auth] Verify Email',
  props<{ id: string; hash: string }>()
);

export const verifyEmailSuccess = createAction(
  '[Auth] Verify Email Success',
  props<{ message: string }>()
);

export const verifyEmailFailure = createAction(
  '[Auth] Verify Email Failure',
  props<{ error: string }>()
);

// Resend Verification Actions
export const resendVerification = createAction(
  '[Auth] Resend Verification',
  props<{ email?: string }>()
);

export const resendVerificationSuccess = createAction(
  '[Auth] Resend Verification Success',
  props<{ message: string }>()
);

export const resendVerificationFailure = createAction(
  '[Auth] Resend Verification Failure',
  props<{ error: string }>()
);

// Load User from Token
export const loadUserFromToken = createAction('[Auth] Load User From Token');

// Clear Auth State
export const clearAuthState = createAction('[Auth] Clear Auth State');

// Set Loading
export const setLoading = createAction(
  '[Auth] Set Loading',
  props<{ loading: boolean }>()
);

// Clear Messages
export const clearMessages = createAction('[Auth] Clear Messages');