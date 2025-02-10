import React from "react";
import Contact from "./Contact";
import User from "./User";
import "./App.css";

const App = () => {
  let name = "Anton";
  let a = 1,
    b = 3;
  return (
    <div className="app__container">
      <User name={name} age={15} />
      <Contact />
    </div>
  );
};

export default App;
