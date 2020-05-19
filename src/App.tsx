import React, { useState } from 'react';
import * as firebase from 'firebase/app';

import { useGithubAuth } from './hooks/useGithubAuth'
import './App.css';

interface ApplicationUser extends firebase.User {
  credential: firebase.auth.AuthCredential,
}

const App = () => {

  const { userContext, login, logout } = useGithubAuth();
  const { user } = userContext;


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
          user ? <button onClick={() => { }}>Sign Out</button>
            : <button onClick={login}>Sign in with Github</button>
        }
      </main>
    </div>
  );
}

export default App;
