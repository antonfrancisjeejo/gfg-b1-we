import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Verify from "./Pages/Verify/Verify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/verify/:token" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
