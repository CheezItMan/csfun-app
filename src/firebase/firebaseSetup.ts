import * as firebase from 'firebase/app';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';


import { config } from './config';

export const firebaseApp = firebase.initializeApp(config);

export const firebaseAppAuth = firebaseApp.auth();

// in case we want to add different auth providers
export const providers = {
  githubProvider: new firebase.auth.GithubAuthProvider()
}

providers.githubProvider.addScope('read:user');
providers.githubProvider.addScope('')

// Adding custom parameters to github
// providers.githubProvider.setCustomParameters

export const createComponentWithAuth = withFirebaseAuth({
  providers,
  firebaseAppAuth,
});