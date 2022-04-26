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
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
