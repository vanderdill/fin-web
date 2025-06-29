import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmH1Directive,
  HlmH3Directive,
  HlmPDirective,
} from '@spartan-ng/ui-typography-helm';
import { RouterLink } from '@angular/router';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';

enum LoginState {
  SignUp,
  SignIn,
}

@Component({
  selector: 'fin-sign-in',
  imports: [
    CommonModule,
    RouterLink,
    SignInFormComponent,
    HlmH1Directive,
    HlmH3Directive,
    HlmPDirective,
  ],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  readonly loginState = signal(LoginState.SignUp);
  readonly loginStateEnum = LoginState;

  readonly store = inject(Store);

  ngOnInit(): void {
    this.login();
  }

  signUp() {
    this.loginState.set(LoginState.SignUp);
  }

  signIn() {
    this.loginState.set(LoginState.SignIn);
  }

  login() {
    this.store.dispatch(
      AuthActions.login({
        username: 'vanderson.dill@fin.com',
        password: '123456',
      })
    );
  }
}
