import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import * as usersActions from '../actions';
import { loadUsersError, loadUsersSuccess } from '../actions';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private usersSvc: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      mergeMap(() =>
        this.usersSvc.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((err) => of(loadUsersError({payload: err})))
        )
      )
    )
  );
}
