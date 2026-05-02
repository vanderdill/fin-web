import { HlmH1, HlmH3, HlmP } from '@spartan-ng/helm/typography';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpFormComponent } from '../../components/sign-up-form/sign-up-form.component';
import { RouterLink } from '@angular/router';

enum LoginState {
  SignUp,
  SignIn,
}

@Component({
  selector: 'fin-sign-in',
  imports: [CommonModule, RouterLink, SignUpFormComponent, HlmH1, HlmH3, HlmP],
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
