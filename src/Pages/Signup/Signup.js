import React from "react";

const Signup = () => {
  const handleFromSubmit = () => {};
  return (
    <div className="login">
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleFromSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
          <label htmlFor="confirmpass">Confirm Password</label>
          <input
            id="confirmpass"
            type="password"
            placeholder="Confirm Password"
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
