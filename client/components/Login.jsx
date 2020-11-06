
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });

  const { username, password } = login;

  function loginInfo(e) {
    axios.get('http://localhost:3000/user/login', {name: username, pass: password})
    .then(result => {
      if(result.status === 203){
        console.log('no user')
      }
      else{
        window.location.replace('http://localhost:8080/home/'+result.data + '#')
      }
    })
    .catch(err => console.log(err))
  }

  function signUp(e) {
    axios.post('http://localhost:3000/user/add', {name : username, pass: password})
    .then(result => {
      window.location.replace('http://localhost:8080/home/'+result.data + "#")
    })
    .catch(err => {console.log(err)})
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
