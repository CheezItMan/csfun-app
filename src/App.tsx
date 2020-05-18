import React from 'react';
import { WrappedComponentProps } from 'react-with-firebase-auth';

import { createComponentWithAuth } from './firebase/firebaseSetup';

import './App.css';

const App = ({
  signInWithGithub,
  signOut,
  setError,
  user,
  error,
  loading,
}: WrappedComponentProps) => {
  if (error) {
    console.log(error);
  }
  if (user) {
    console.log(user);
    console.log(user.providerData[0]);
    console.log(user.refreshToken);
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          user ? <h1>Hello, {user.displayName} </h1>
            : <h1>Please log in</h1>
        }
      </header>
      <main>
        {
          user ? <button onClick={signOut}>Sign Out</button>
            : <button onClick={signInWithGithub}>Sign in with Github</button>
        }

        {
          loading && <h2>Loading...</h2>
        }
      </main>
    </div>
  );
}

/* Higher Order Component wrapping App */
export default createComponentWithAuth(App);
