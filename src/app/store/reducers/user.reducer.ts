import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import * as actions from '../actions';

export interface UserState {
  id: number;
  user?: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  id: 0,
  user: undefined,
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
    userInitialState,

  on(actions.loadUser, (state, {id}) => ({ ...state, id, loading: true, loaded: false })),

  on(actions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: {...user},
  })),

  on(actions.loadUserError, (state, {payload}) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload?.url,
      message: payload?.message,
      name: payload?.name
    }
  }))
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
