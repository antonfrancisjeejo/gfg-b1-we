import { Link } from "react-router";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/user/kevin">Profile</Link>
    </nav>
  );
};

export default Navbar;
