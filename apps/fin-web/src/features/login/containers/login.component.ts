import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { hlmH1, HlmH1Directive, hlmH2, hlmH3, HlmH3Directive, hlmP, HlmPDirective } from '@spartan-ng/ui-typography-helm';
import { SignUpFormComponent } from '../components/sign-up-form.component';

enum LoginState {
  SignUp,
  SignIn,
}

@Component({
  selector: 'fin-login',
  imports: [CommonModule, SignUpFormComponent, HlmH1Directive, HlmH3Directive, HlmPDirective],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  readonly loginState = signal(LoginState.SignUp);
  readonly loginStateEnum = LoginState;

  signUp() {
    this.loginState.set(LoginState.SignUp);
  }

  signIn() {
    this.loginState.set(LoginState.SignIn);
  }
}
