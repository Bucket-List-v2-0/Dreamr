
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const { username, password } = login;

  function loginInfo(e) {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        setLogin("");
        if (data) {
          logIn(data);
        } else {
          return null;
        }
      })
      .catch((err) => console.log(err));
  }

  function signUp(e) {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: {
        // Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        setLogin("");
        if (data) {
          logIn(data);
        } else {
          return null;
        }
      })
      .catch((err) => console.log(err));
  }


  return (
    <div className="login-form">
      <div className="sign-up-title">
        <p>Sign up for a free account</p>
      </div>
      <div className="form-details">
        <form>
          <input
            type="text"
            className="login-field"
            placeholder="Username"
            value={username || ""}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
          <input
            type="password"
            className="login-field"
            id="password-field"
            placeholder="Password"
            value={password || ""}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </form>
      </div>
      <div className="login-buttons">
        <button className="login-btn" onClick={signUp} type="submit">
          Sign up
      </button>
        <button className="login-btn" onClick={loginInfo} type="submit">
          Login
      </button>
        <button className="login-btn"><a href="/auth/google">Sign In with Google</a>!</button>
      </div>
    </div>
  )
}

