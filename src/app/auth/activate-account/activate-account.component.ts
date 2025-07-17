import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import * as AuthActions from '../../store/auth/auth.actions';
import { 
  selectAuthLoading, 
  selectAuthError, 
  selectAuthSuccessMessage 
} from '../../store/auth/auth.selectors';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  successMessage$: Observable<string | null>;
  
  id = '';
  hash = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) {
    this.isLoading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
    this.successMessage$ = this.store.select(selectAuthSuccessMessage);
  }

  ngOnInit() {
    // Clear any previous auth state
    this.store.dispatch(AuthActions.clearMessages());
    
    this.id = this.route.snapshot.params['id'] || '';
    this.hash = this.route.snapshot.params['hash'] || '';

    if (!this.id || !this.hash) {
      this.store.dispatch(AuthActions.verifyEmailFailure({ 
        error: 'Invalid verification link' 
      }));
      return;
    }

    this.verifyEmail();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  verifyEmail() {
    this.store.dispatch(AuthActions.verifyEmail({ 
      id: this.id, 
      hash: this.hash 
    }));
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  resendActivation() {
    this.router.navigate(['/auth/login']);
  }
}