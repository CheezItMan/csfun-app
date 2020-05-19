import * as firebase from 'firebase/app';
import 'firebase/auth';


import { config } from './config';

firebase.initializeApp(config);

export { firebase }

export const db = firebase.firestore;

// Adding custom parameters to github
// providers.githubProvider.setCustomParameters
