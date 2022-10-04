import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.interface';

const stateTitle = '[Users]';

export const CREATE_USER = `${stateTitle} create user`;
export const CREATE_USER_SUCCESS = `${stateTitle} create user success`;

export const createUser = createAction(CREATE_USER, props<{ user: User }>());
export const createUserSuccess = createAction(
  CREATE_USER_SUCCESS,
  props<{ user: User }>()
);
