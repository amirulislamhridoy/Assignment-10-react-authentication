import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFromSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  };
  if(user){
    navigate('/')
  }
  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            placeholder="Password"
          />
          <input type="submit" value="Login" />
        </form>
        <p><h3><Link to="/signup">Create a new account?</Link></h3></p>
      </div>
    </div>
  );
};

export default Login;
