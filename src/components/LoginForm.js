import React, { useState } from "react";

function LoginForm({ onSubmit, loading }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    onSubmit({ username, password });
  }
  return (
    <>
      <form onSubmit={handleFormSubmit} className="login-form">
        <h1>Login Page</h1>
        <div className="group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button disabled={!username || !password}>
          {loading? 'Loading...' : 'Log In'}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
