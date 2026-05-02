import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmLabel } from '@spartan-ng/helm/label';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fin-sign-up-form',
  imports: [CommonModule, HlmButtonImports, HlmInput, HlmLabel],
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {
  signUp(): void {
    console.log('Sign In');
  }
}
