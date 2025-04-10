import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { hlmH1, hlmP } from '@spartan-ng/ui-typography-helm';

enum LoginState {
  SignUp,
  SignIn,
}

@Component({
  selector: 'fin-login',
  imports: [CommonModule, HlmButtonDirective],
  template: ` <div class="m-0 flex items-center justify-center h-screen">
    <div
      class="container rounded-sm shadow-lg bg-white relative overflow-hidden w-[80vw] max-w-full h-[80vh]"
      [class.right-panel-active]="loginState() === loginStateEnum.SignUp"
    >
      <div></div>
      <div class="p-16"></div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 class="${hlmH1}">Welcome Back!</h1>
            <p class="${hlmP}">
              To keep connected with us please login with your personal info
            </p>
            <button
              hlmBtn
              variant="outline"
              size="lg"
              (click)="signIn()"
              class="active:scale-[0.95] mt-6"
            >
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1 class="${hlmH1}">Hello, Friend!</h1>
            <p class="${hlmP}">
              Enter your personal details and start journey with us
            </p>
            <button
              hlmBtn
              variant="outline"
              size="lg"
              (click)="signUp()"
              class="active:scale-[0.95] mt-6"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  styles: `.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
  }

  .container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  .container.right-panel-active .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    background: hsl(var(---primary));
    background: -webkit-linear-gradient(
      336deg,
      rgb(56, 57, 97),
      rgb(22, 163, 74)
    );
    background: linear-gradient(336deg, rgb(56, 57, 97), rgb(22, 163, 74));
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }

  .overlay-left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay-left {
    transform: translateX(0);
  }

  .overlay-right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay-right {
    transform: translateX(20%);
  }
  `,
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
