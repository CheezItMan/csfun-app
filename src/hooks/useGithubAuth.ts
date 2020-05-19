import * as firebase from 'firebase';
import { useContext } from 'react';

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
          const credential = result.credential as firebase.auth.OAuthCredential;

          const { user } = result;
          if (user) {
            const newUserState = {
              ...userContext,
              user,
              accessToken: credential.accessToken ? credential.accessToken : null,
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

  return {
    login,
    logout,
    userContext
  }

}