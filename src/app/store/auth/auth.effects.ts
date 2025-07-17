import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  // Login Effect
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ email, password }) =>
        this.authService.login({ email, password }).pipe(
          map((response) => {
            if (response.success && response.data) {
              return AuthActions.loginSuccess({
                user: response.data.user,
                token: response.data.token
              });
            } else {
              return AuthActions.loginFailure({
                error: response.message || 'Login failed',
                emailVerified: response.email_verified,
                userId: response.user_id
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.loginFailure({
              error: error.error?.message || 'An error occurred during login',
              emailVerified: error.error?.email_verified,
              userId: error.error?.user_id
            }))
          )
        )
      )
    )
  );

  // Login Success Effect
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => {
        this.router.navigate(['/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // Register Effect
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap((registerData) =>
        this.authService.register(registerData).pipe(
          map((response) => {
            if (response.success && response.data) {
              return AuthActions.registerSuccess({
                user: response.data.user,
                token: response.data.token
              });
            } else {
              return AuthActions.registerFailure({
                error: response.message || 'Registration failed'
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.registerFailure({
              error: error.error?.message || error.error?.error || 'An error occurred during registration'
            }))
          )
        )
      )
    )
  );

  // Register Success Effect
  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerSuccess),
      tap(() => {
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      })
    ),
    { dispatch: false }
  );

  // Logout Effect
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) =>
            of(AuthActions.logoutFailure({
              error: error.error?.message || 'Logout failed'
            }))
          )
        )
      )
    )
  );

  // Logout Success Effect
  logoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutSuccess),
      tap(() => {
        this.router.navigate(['/auth/login']);
      })
    ),
    { dispatch: false }
  );

  // Forgot Password Effect
  forgotPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.forgotPassword),
      exhaustMap(({ email }) =>
        this.authService.forgotPassword({ email }).pipe(
          map((response) => {
            if (response.success) {
              return AuthActions.forgotPasswordSuccess({
                message: response.message || 'Password reset link sent to your email'
              });
            } else {
              return AuthActions.forgotPasswordFailure({
                error: response.message || 'Failed to send reset link'
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.forgotPasswordFailure({
              error: error.error?.message || error.error?.error || 'An error occurred'
            }))
          )
        )
      )
    )
  );

  // Reset Password Effect
  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPassword),
      exhaustMap((resetData) =>
        this.authService.resetPassword(resetData).pipe(
          map((response) => {
            if (response.success) {
              return AuthActions.resetPasswordSuccess({
                message: response.message || 'Password reset successfully'
              });
            } else {
              return AuthActions.resetPasswordFailure({
                error: response.message || 'Failed to reset password'
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.resetPasswordFailure({
              error: error.error?.message || error.error?.error || 'An error occurred'
            }))
          )
        )
      )
    )
  );

  // Reset Password Success Effect
  resetPasswordSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPasswordSuccess),
      tap(() => {
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 2000);
      })
    ),
    { dispatch: false }
  );

  // Verify Email Effect
  verifyEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verifyEmail),
      exhaustMap(({ id, hash }) =>
        this.authService.verifyEmail(id, hash).pipe(
          map((response) => {
            if (response.success) {
              return AuthActions.verifyEmailSuccess({
                message: response.message || 'Email verified successfully'
              });
            } else {
              return AuthActions.verifyEmailFailure({
                error: response.message || 'Failed to verify email'
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.verifyEmailFailure({
              error: error.error?.message || error.error?.error || 'An error occurred during verification'
            }))
          )
        )
      )
    )
  );

  // Resend Verification Effect
  resendVerification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resendVerification),
      exhaustMap(({ email }) =>
        this.authService.resendVerification({ email }).pipe(
          map((response) => {
            if (response.success) {
              return AuthActions.resendVerificationSuccess({
                message: response.message || 'Verification email sent'
              });
            } else {
              return AuthActions.resendVerificationFailure({
                error: response.message || 'Failed to resend verification email'
              });
            }
          }),
          catchError((error) =>
            of(AuthActions.resendVerificationFailure({
              error: error.error?.message || 'Failed to resend verification email'
            }))
          )
        )
      )
    )
  );
}