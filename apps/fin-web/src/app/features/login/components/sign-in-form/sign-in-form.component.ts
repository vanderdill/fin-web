import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fin-sign-in-form',
  imports: [CommonModule, HlmButtonImports, HlmInput, HlmLabel],
  templateUrl: './sign-in-form.component.html',
})
export class SignInFormComponent {
  signIn(): void {
    console.log('Sign In');
  }
}
