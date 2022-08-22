import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import * as actions from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  usersInitialState,

  on(actions.loadUsers, (state) => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(actions.loadUsersError, (state, {payload}) => ({
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

export function usersReducer(state: any, action: any) {
  return _usersReducer(state, action);
}
