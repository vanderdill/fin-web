import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BrnProgressComponent,
  BrnProgressIndicatorComponent,
} from '@spartan-ng/brain/progress';
import {
  HlmProgressDirective,
  HlmProgressIndicatorDirective,
} from '@spartan-ng/ui-progress-helm';

@Component({
  imports: [
    RouterModule,
    BrnProgressComponent,
    BrnProgressIndicatorComponent,
    HlmProgressIndicatorDirective,
    HlmProgressDirective,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'fin-web';

  value = 0;

  ngOnInit() {
    setTimeout(() => (this.value = 33), 3000);
  }
}
