import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.models';

export const loadUser = createAction('[Users] Load user',
props<{id: number}>());

export const loadUserSuccess = createAction(
  '[User] Load user success',
  props<{ user: User }>()
);
export const loadUserError = createAction(
  '[User] Load user error',
  props<{ payload: any }>()
);
