import * as firebase from 'firebase';
import React, { useContext, useState, useEffect } from 'react';

import { UserContextType, UserContext } from '../context/UserContext';
import { githubProvider } from '../firebase/githubProvider';

interface UserStateCallback {
  (message: UserContextType): void,
}

export const useGithubAuth = () => {
  const userContext = useContext(UserContext);

  const login = () => {
    firebase.auth().signInWithPopup(githubProvider)
      .then((result) => {
        if (result && result.credential) {
          const { credential } = result;

          const { user } = result;
          if (user) {
            const newUserState = {
              ...userContext,
              user,
              credential,
            };
            userContext.setUserContext(newUserState);
          }
        }
      });
  }

  const logout = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      console.log('User Logged out')
      userContext.setUserContext({
        ...userContext,
        user: null,
        accessToken: null,
      });
    }).catch(function (error) {
      // An error happened.
      console.log('User Logout failed');
    });
  }

  const onAuthStateChange = (callback: UserStateCallback) => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({
          user,
          accessToken: userContext.accessToken,
          setUserContext: userContext.setUserContext,
        });
      }
    });
  }

  return {
    login,
    logout,
    userContext
  }

}