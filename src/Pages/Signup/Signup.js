import React, { useState } from "react";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [myError, setMyError] = useState('')
    const navigate = useNavigate()

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }
  const handleFromSubmit = (e) => {
    e.preventDefault()
    if(password !== confirmPass){
        setMyError("Password don't match");
        return
    }
    if(!/.{6,}/.test(password) || !/.{6,}/.test(confirmPass)){
        setMyError('Minium 6 character')
        return
    }
    createUserWithEmailAndPassword(email, password)
  };
  if(user){
      navigate('/')
  }
  return (
    <div className="login">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="email">Email</label>
          <input onBlur={handleEmail} id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input onBlur={handlePassword} id="password" type="password" placeholder="Password" />
          <label htmlFor="confirmpass">Confirm Password</label>
          <input
          onBlur={handleConfirmPass}
            id="confirmpass"
            type="password"
            placeholder="Confirm Password"
          />
          {myError && <h3 style={{color: 'red'}}>{myError}</h3>}
          {error && <h3 style={{color: 'red'}}>{error.code}</h3>}
          <input id="error" type="submit" value="Sign Up" />
        </form>
        <p><h3><Link to="/login">Already have an account?</Link></h3></p>
      </div>
    </div>
  );
};

export default Signup;
