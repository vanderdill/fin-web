import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-up',
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./features/login/containers/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./features/login/containers/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
];
