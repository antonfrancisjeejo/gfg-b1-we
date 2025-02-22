import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { GlobalProvider } from "./components/GlobalContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
