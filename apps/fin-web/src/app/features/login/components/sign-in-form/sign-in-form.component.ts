import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'fin-sign-in-form',
  imports: [
    CommonModule,
    HlmButtonModule,
    HlmInputDirective,
    HlmLabelDirective,
  ],
  templateUrl: './sign-in-form.component.html',
})
export class SignInFormComponent {
  signIn(): void {
    console.log('Sign In');
  }
}
