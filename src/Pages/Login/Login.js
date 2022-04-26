import React from "react";
import "./Login.css";

const Login = () => {
    const handleFromSubmit = () => {
        
    }
  return (
    <div className="login">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
          
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
