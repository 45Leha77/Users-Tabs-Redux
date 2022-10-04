import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/user.interface';
import { UsersState } from './users.state';

export const USERS_STATE_NAME = 'users';

const getUsersState = createFeatureSelector<UsersState>(USERS_STATE_NAME);

export const getUsers = createSelector(getUsersState, (state): User[] => {
  return state.users;
});
