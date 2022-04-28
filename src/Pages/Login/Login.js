import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isReactNative } from "@firebase/util";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
      );

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFromSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email,password)
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(email)
    toast.success("Send Reset Password Email")
  };
  let from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from)
  }
  if(error){
    toast.error(error.code)
  }
  return (
    <div className="signup">
      <ToastContainer />
      <div className="signup-container">
        <h1>Login</h1>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmail}
            type="email"
            id="email"
            placeholder="Email"
          />

          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            id="password"
            placeholder="password"
          />
          <input type="submit" value="Login" />
        </form>
        {error && <h3 style={{color: 'red'}}>{error.code}</h3>}
        <h3 className="login-h3-span">
          <span onClick={handleResetPassword}>Reset Password</span>
        </h3>
        <h3 className="login-h3">
          <Link to="/signup">Create a new account ?</Link>
        </h3>
      <SocialLogin />
      </div>
    </div>
  );
};

export default Login;
