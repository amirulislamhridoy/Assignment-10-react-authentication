import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Signup.css";

const Signup = () => {
    const [myError, setMyError] = useState('')
const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, NameError] = useUpdateProfile(auth);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    if(password.length < 6 || confirmPass.length < 6){
        setMyError('Password will be Minium 6 characters ')
        return
    }
    if(password !== confirmPass){
        setMyError("Password don't match")
        return
    }
    await createUserWithEmailAndPassword(email,password)
    await updateProfile({displayName: name})
  };

  if(user){
      console.log(user)
    //   navigate("/")
  }
  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="name">Name</label>
          <input onBlur={handleName} type="text" id="name" placeholder="Name" />
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
            placeholder="Password"
          />
          <label htmlFor="confirmPass">Confirm Password</label>
          <input
            onBlur={handleConfirmPass}
            type="password"
            id="confirmPass"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Sign Up" />
        </form>
        <h3 style={{color: 'red'}}>{myError}</h3>
        <h3 style={{color: 'red'}}>{error?.code}</h3>
        <h3>
          <Link to="/login">Already have an account</Link>
        </h3>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Signup;
