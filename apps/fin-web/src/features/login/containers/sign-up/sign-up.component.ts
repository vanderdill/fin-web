import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HlmH1Directive,
  HlmH3Directive,
  HlmPDirective,
} from '@spartan-ng/ui-typography-helm';
import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
import { RouterLink } from '@angular/router';

enum LoginState {
  SignUp,
  SignIn,
}

@Component({
  selector: 'fin-sign-in',
  imports: [
    CommonModule,
    RouterLink,
    SignUpFormComponent,
    HlmH1Directive,
    HlmH3Directive,
    HlmPDirective,
  ],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  readonly loginState = signal(LoginState.SignUp);
  readonly loginStateEnum = LoginState;

  signUp() {
    this.loginState.set(LoginState.SignUp);
  }

  signIn() {
    this.loginState.set(LoginState.SignIn);
  }
}
