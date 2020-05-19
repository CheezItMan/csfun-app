import { createContext } from 'react';

export interface UserDataType {
  user: null | firebase.User,
  accessToken: null | String,
}

export interface UserContextType extends UserDataType {

  setUserContext(data: UserDataType): void,
}

const initialContext: UserContextType = {
  user: null,
  accessToken: null,
  setUserContext: (user) => { }
};

export const UserContext = createContext(initialContext);
