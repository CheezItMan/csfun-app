import React, { FunctionComponent, useState, useEffect } from 'react';

import { UserContext, UserContextType } from './UserContext';



type UserContextProps = {

}


const userData: UserContextType = {
  user: null,
  accessToken: null,
  setUserContext: (userInfo: UserContextType) => { }
}

export const UserContextProvider: FunctionComponent<UserContextProps> = ({ children }) => {

  const [userState, setUserState] = useState(userData);

  // This feels like a kludge
  const updateUser = (userInfo: UserContextType) => {
    setUserState(userInfo);
  }
  useEffect(() => {
    setUserState({
      ...userData,
      setUserContext: updateUser,
    });
  }, [])


  return (
    <UserContext.Provider value={userState} >
      {children}
    </UserContext.Provider>
  )
}