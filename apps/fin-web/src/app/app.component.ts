import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiComponent } from '@fin-web/ui';

@Component({
  imports: [UiComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fin-web';
}
