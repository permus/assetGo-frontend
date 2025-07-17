import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAuthSuccessMessage = createSelector(
  selectAuthState,
  (state: AuthState) => state.successMessage
);

export const selectEmailVerified = createSelector(
  selectAuthState,
  (state: AuthState) => state.emailVerified
);

export const selectUserId = createSelector(
  selectAuthState,
  (state: AuthState) => state.userId
);

export const selectAuthInfo = createSelector(
  selectAuthState,
  (state: AuthState) => ({
    user: state.user,
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    successMessage: state.successMessage,
    emailVerified: state.emailVerified,
    userId: state.userId
  })
);