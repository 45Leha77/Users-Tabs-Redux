import { User } from '../../models/user.interface';

export interface UsersState {
  users: User[];
}

export const initialState: UsersState = {
  users: [],
};
