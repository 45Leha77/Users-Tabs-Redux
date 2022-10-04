import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { createUser, createUserSuccess } from './users.actions';

@Injectable({ providedIn: 'root' })
export class UsersEffects {
  constructor(private actions$: Actions, private router: Router) {}

  public addCustomer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createUser),
      map((action) => {
        return createUserSuccess({ user: action.user });
      })
    );
  });

  public createRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createUserSuccess),
        tap(() => {
          this.router.navigate(['../list']);
        })
      );
    },
    { dispatch: false }
  );
}
