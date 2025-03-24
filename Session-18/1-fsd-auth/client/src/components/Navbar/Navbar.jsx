import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slices/user";
import { Link } from "react-router";

const Navbar = () => {
  const user = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div>
          <h1>UMS</h1>
        </div>
        <ul>
          <Link to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link to="/users">
            <li>Users</li>
          </Link>

          {user && <li>{user?.name}</li>}
          {user ? <li onClick={logout}>Logout</li> : <li>Login</li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
