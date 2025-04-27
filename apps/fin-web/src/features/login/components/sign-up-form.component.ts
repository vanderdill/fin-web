import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'fin-sign-up-form',
  imports: [CommonModule, HlmButtonModule, HlmInputDirective, HlmLabelDirective],
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {

  signUp(): void {
    console.log('Sign In');
  }
}
