import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as usersActions from '../actions';
@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private usersSvc: UserService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap((action) =>
        this.usersSvc.getUser(action.id).pipe(
          map((user) => usersActions.loadUserSuccess({ user })),
          catchError((err) => of(usersActions.loadUserError({payload: err})))
        )
      )
    )
  );
}
