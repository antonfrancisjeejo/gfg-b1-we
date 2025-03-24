import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Verify from "./Pages/Verify/Verify";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleLogin } from "./slices/user";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!user && token) {
      dispatch(handleLogin(token));
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/user/verify/:token" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
