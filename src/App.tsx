import React, { useState } from 'react';
import * as firebase from 'firebase/app';

import { provider } from './firebase/firebaseSetup';
import './App.css';

interface ApplicationUser extends firebase.User {
  credential: firebase.auth.AuthCredential,
}

interface GithubAuthUser extends firebase.User {
  credential: String,
}

const App = () => {

  const [user, setUser] = useState<ApplicationUser | undefined>(undefined);

  const login = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        if (result && result.credential) {
          const credential = result.credential;
          console.log(credential);
          Object.keys(credential).forEach((key) => {
            console.log('key = ', key);
          });

          const newUser = result.user;
          if (newUser) {
            const newUserObject = {
              ...newUser,
              credential,
            };
            setUser(newUserObject);
          }
        }
      })
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
          user ? <button onClick={() => { }}>Sign Out</button>
            : <button onClick={login}>Sign in with Github</button>
        }
      </main>
    </div>
  );
}

export default App;
