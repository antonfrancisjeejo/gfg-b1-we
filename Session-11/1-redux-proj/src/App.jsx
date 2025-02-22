import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import AddCompany from "./pages/AddCompany/AddCompany";
import Companies from "./pages/Companies/Companies";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUsers } from "./slices/users";
import { setCompanies } from "./slices/company";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let users = localStorage.getItem("users");
    let companies = localStorage.getItem("companies");

    dispatch(setUsers(users ? JSON.parse(users) : []));
    dispatch(setCompanies(companies ? JSON.parse(companies) : []));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
