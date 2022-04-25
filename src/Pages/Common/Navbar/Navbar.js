import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav>
      <h1>Doctor Carter</h1>
      <div className={`${menu ? "menuShow" : "menuHide"}`}>
        <Link to="/">Home</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/feature">Login</Link>
        <Link to="/feature">Sign Up</Link>
      </div>
      <AiOutlineMenuFold onClick={() => setMenu(!menu)} id="menuIcon" />
    </nav>
  );
};

export default Navbar;
