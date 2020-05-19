import { firebase } from './firebaseSetup';

export interface GithubAuthUser extends firebase.User {
  credential: String,
}




export const githubProvider = new firebase.auth.GithubAuthProvider();

githubProvider.addScope('read:user');
githubProvider.addScope('')