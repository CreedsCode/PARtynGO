import React, { useState } from 'react';

import "./Background.css";


export default function Login() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // For the front-end-only example, we'll assume the user is logged in if the fields are not empty.
    if (loginUsername && loginPassword) {
      setLoggedIn(true);
    }
  };

  const handleSignIn = () => {
    // For the front-end-only example, we'll assume the user is signed in if the fields are not empty.
    if (signInUsername && signInPassword) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div class="bm-pl">
        <div className="bm-pl__blob bm-pl__blob--r"></div>
        <div className="bm-pl__blob bm-pl__blob--g"></div>
        <div className="bm-pl__blob bm-pl__blob--b"></div>
      </div>
      <div class="bm-overlay"></div>

      <img
        src="/logo-pink.png"
        alt="logo"
        className="logo"
        width="200"
        height="200"
      />
      <h1 className="mt-3">Login</h1>

      <div>
      {loggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          <h2>Login</h2>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      <div>
        {!loggedIn && (
          <div>
            <h2>Sign In</h2>
            <div>
              <label>Username:</label>
              <input
                type="text"
                value={signInUsername}
                onChange={(e) => setSignInUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

