import React from 'react';
import * as firebase from 'firebase/app';

import { useGithubAuth } from './hooks/useGithubAuth'
import './App.css';

interface ApplicationUser extends firebase.User {
  credential: firebase.auth.AuthCredential,
}

const App = () => {

  const { userContext, login, logout } = useGithubAuth();
  const { user } = userContext;

  if (userContext.accessToken) console.log(userContext.accessToken)

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
          user ? <button onClick={logout}>Sign Out</button>
            : <button onClick={login}>Sign in with Github</button>
        }


      </main>
    </div>
  );
}

export default App;
