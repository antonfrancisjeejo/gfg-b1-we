import { Link } from "react-router";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>Payroll Management</h1>
        <div className="navbar__container">
          <Link to="/">Home</Link>
          <Link to="/add-company">Add Company</Link>
          <Link to="/companies">Companies</Link>
          <Link to="/users">Users</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
