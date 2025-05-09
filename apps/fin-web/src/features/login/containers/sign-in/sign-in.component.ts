import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmH1Directive,
  HlmH3Directive,
  HlmPDirective,
} from '@spartan-ng/ui-typography-helm';
import { RouterLink } from '@angular/router';
import { SignInFormComponent } from '../../components/sign-in-form/sign-in-form.component';

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
export class SignInComponent {
  readonly loginState = signal(LoginState.SignUp);
  readonly loginStateEnum = LoginState;

  signUp() {
    this.loginState.set(LoginState.SignUp);
  }

  signIn() {
    this.loginState.set(LoginState.SignIn);
  }
}
