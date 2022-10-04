import { Action, createReducer, on } from '@ngrx/store';
import { createUserSuccess } from './users.actions';
import { UsersState, initialState } from './users.state';

const _usersReducer = createReducer(
  initialState,
  on(createUserSuccess, (state, action) => {
    return {
      ...state,
      users: [...state.users, action.user],
    };
  })
);

export function UsersReducer(state: UsersState | undefined, action: Action) {
  return _usersReducer(state, action);
}
