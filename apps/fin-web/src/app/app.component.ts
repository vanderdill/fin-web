import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideCog,
  lucidePlus,
  lucideSearch,
  lucideSmile,
  lucideUser,
  lucideWallet,
} from '@ng-icons/lucide';
import { BrnCommandImports } from '@spartan-ng/brain/command';
import {
  BrnProgressComponent,
  BrnProgressIndicatorComponent,
} from '@spartan-ng/brain/progress';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCalendarComponent } from '@spartan-ng/ui-calendar-helm';
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';
import { HlmDatePickerComponent } from '@spartan-ng/ui-datepicker-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import {
  HlmProgressDirective,
  HlmProgressIndicatorDirective,
} from '@spartan-ng/ui-progress-helm';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import {
  HlmTabsComponent,
  HlmTabsContentDirective,
  HlmTabsListComponent,
  HlmTabsTriggerDirective,
} from '@spartan-ng/ui-tabs-helm';

@Component({
  imports: [
    RouterModule,
    NgIcon,
    BrnProgressComponent,
    BrnProgressIndicatorComponent,
    HlmProgressIndicatorDirective,
    HlmProgressDirective,
    HlmCalendarComponent,
    HlmDatePickerComponent,
    HlmSkeletonComponent,
    HlmInputDirective,
    HlmFormFieldModule,
    HlmBadgeDirective,
    BrnCommandImports,
    HlmCommandImports,
    HlmIconDirective,

    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,

    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmLabelDirective,
    HlmButtonDirective,
  ],
  providers: [
    provideIcons({
      lucideSearch,
      lucideCalendar,
      lucideSmile,
      lucidePlus,
      lucideUser,
      lucideWallet,
      lucideCog,
    }),
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: {
    class: 'flex justify-center flex-col items-center',
  },
})
export class AppComponent implements OnInit {
  title = 'fin-web';

  value = 0;

  /** The selected date */
  selectedDate = new Date();

  /** The minimum date */
  minDate = new Date(2023, 0, 1);

  /** The maximum date */
  maxDate = new Date(2030, 11, 31);

  ngOnInit() {
    setTimeout(() => (this.value = 33), 3000);
  }
}
