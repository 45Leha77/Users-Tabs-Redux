import { UsersReducer } from './state/users.reducer';
import { UsersState } from './state/users.state';

export interface AppState {
  users: UsersState;
}

export const AppReducer = {
  users: UsersReducer,
};
