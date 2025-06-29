import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';

export const login$ = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) =>
    actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        authService.login(username, password).pipe(
          map((user) =>
            user
              ? AuthActions.loginSuccess({ user, token: 'token' })
              : AuthActions.loginFailure()
          ),
          catchError(() => of(AuthActions.loginFailure()))
        )
      )
    ),
  { functional: true }
);
