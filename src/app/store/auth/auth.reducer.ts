import { createReducer, on } from '@ngrx/store';
import { User } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
  emailVerified: boolean | null;
  userId: number | null;
}

export const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  successMessage: null,
  emailVerified: null,
  userId: null
};

export const authReducer = createReducer(
  initialState,

  // Login
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
    emailVerified: null,
    userId: null
  })),

  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
    emailVerified: true
  })),

  on(AuthActions.loginFailure, (state, { error, emailVerified, userId }) => ({
    ...state,
    loading: false,
    error,
    emailVerified: emailVerified ?? null,
    userId: userId ?? null,
    isAuthenticated: false
  })),

  // Register
  on(AuthActions.register, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null
  })),

  on(AuthActions.registerSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
    successMessage: 'Registration successful! Please check your email to verify your account.'
  })),

  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    isAuthenticated: false
  })),

  // Logout
  on(AuthActions.logout, (state) => ({
    ...state,
    loading: true
  })),

  on(AuthActions.logoutSuccess, () => ({
    ...initialState
  })),

  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Forgot Password
  on(AuthActions.forgotPassword, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null
  })),

  on(AuthActions.forgotPasswordSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    successMessage: message,
    error: null
  })),

  on(AuthActions.forgotPasswordFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    successMessage: null
  })),

  // Reset Password
  on(AuthActions.resetPassword, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null
  })),

  on(AuthActions.resetPasswordSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    successMessage: message,
    error: null
  })),

  on(AuthActions.resetPasswordFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    successMessage: null
  })),

  // Email Verification
  on(AuthActions.verifyEmail, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null
  })),

  on(AuthActions.verifyEmailSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    successMessage: message,
    error: null,
    emailVerified: true
  })),

  on(AuthActions.verifyEmailFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    successMessage: null,
    emailVerified: false
  })),

  // Resend Verification
  on(AuthActions.resendVerification, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null
  })),

  on(AuthActions.resendVerificationSuccess, (state, { message }) => ({
    ...state,
    loading: false,
    successMessage: message,
    error: null
  })),

  on(AuthActions.resendVerificationFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
    successMessage: null
  })),

  // Utility Actions
  on(AuthActions.setLoading, (state, { loading }) => ({
    ...state,
    loading
  })),

  on(AuthActions.clearMessages, (state) => ({
    ...state,
    error: null,
    successMessage: null
  })),

  on(AuthActions.clearAuthState, () => ({
    ...initialState
  }))
);