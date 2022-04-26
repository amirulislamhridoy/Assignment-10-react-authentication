import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  const handleHeaderBgColorChange = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleHeaderBgColorChange);

  const handleSignOut = () => {
    signOut(auth);
    navigate('/login')
  };

  return (
    <nav className={`${navbar && "navChange"}`}>
      <h1>Dr. Luke Slater</h1>
      <div className={`${menu ? "menuShow" : "menuHide"}`}>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
      <AiOutlineMenuFold onClick={() => setMenu(!menu)} id="menuIcon" />
    </nav>
  );
};

export default Navbar;
