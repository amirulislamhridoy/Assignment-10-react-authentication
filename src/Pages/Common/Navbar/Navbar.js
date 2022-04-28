import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiTireIronCross } from "react-icons/gi";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

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
    navigate("/login");
  };

  return (
    <nav className={`${navbar && "navChange"}`}>
      <h1>Dr. Luke Slater</h1>
      <div className={`${menu ? "menuShow" : "menuHide"}`}>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink
          className={({ isActive }) => isActive ? "active-link" : "link"}
          to='/'
        >
          Home
        </NavLink> */}
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/about">About</NavLink>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      {menu ? (
        <GiTireIronCross onClick={() => setMenu(!menu)} id="menuIcon" />
      ) : (
        <AiOutlineMenuFold onClick={() => setMenu(!menu)} id="menuIcon" />
      )}
    </nav>
  );
};

export default Navbar;
