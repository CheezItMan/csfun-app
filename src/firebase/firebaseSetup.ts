import * as firebase from 'firebase/app';
import 'firebase/auth';


import { config } from './config';

export const provider = new firebase.auth.GithubAuthProvider();

provider.addScope('read:user');
provider.addScope('')

firebase.initializeApp(config);

export const db = firebase.firestore;

// Adding custom parameters to github
// providers.githubProvider.setCustomParameters
