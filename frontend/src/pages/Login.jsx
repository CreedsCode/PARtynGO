import React, { useState } from "react";

import Header from "../components/Header";

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
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
    <>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="mt-3">Login</h1>

        <div>
          {loggedIn ? (
            <p>You are logged in!</p>
          ) : (
            <div>
              <div className="my-8 grid grid-cols-2 grid-rows-2 gap-4">
                <label>Username:</label>
                <input
                  type="text"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="bg-white/30 text-white w-full rounded px-3 py-1"
                  placeholder="username"
                />

                <label>Password:</label>
                <input
                  type="password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="bg-white/30 text-white w-full rounded px-3 py-1"
                  placeholder="password"
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
    </>
  );
}
