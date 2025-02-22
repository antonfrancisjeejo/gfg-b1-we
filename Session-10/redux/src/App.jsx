import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import AddCompany from "./pages/AddCompany/AddCompany";
import Companies from "./pages/Companies/Companies";
import Users from "./pages/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "./app/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-company" element={<AddCompany />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
