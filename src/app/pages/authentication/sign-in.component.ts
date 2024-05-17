import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../core/state/authState/auth.facade';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <form [formGroup]="loginForm" class="flex flex-col items-center justify-center">
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input matInput formControlName="email" type="email" />
        <mat-icon matSuffix>email</mat-icon>
        @if(loginForm.controls.email.invalid) {
          <mat-error>Please enter a valid email</mat-error>
        }
        @if(loginForm.controls.email.hasError('required')) {
          <mat-error> Email is required </mat-error>
        }
      </mat-form-field>
      <mat-form-field>
        <mat-label>Password</mat-label>
        <input matInput formControlName="password" type="password" />
        <mat-icon matSuffix>e</mat-icon>
        @if(loginForm.controls.password.invalid) {
          <mat-error>Password must be at least 6 characters</mat-error>
        }
        @if(loginForm.controls.password.hasError('required')) {
          <mat-error> Password is required </mat-error>
        }
      </mat-form-field>
      <button
        mat-raised-button
        color="primary"
        type="button"
        (click)="onLogin()"
      >
        Sign In
      </button>
      @if (authFacade.loginMutation.isPending()) {
      <div class="loading">
        <mat-spinner />
      </div>
      }
    </form>
  `,
  styles: [
    `
      form {
        position: relative;

        .loading {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.5);
        }
      }
    `,
  ],
})
export default class SignInComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  protected readonly authFacade = inject(AuthFacade);

  protected readonly loginForm = this.formBuilder.group<LoginForm>({
    email: this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
    }),
    password: this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  onLogin = () =>
    this.authFacade.loginMutation.mutate(this.loginForm.getRawValue());
}

type LoginForm = {
  email: FormControl<string>;
  password: FormControl<string>;
};
