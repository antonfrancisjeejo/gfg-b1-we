import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../components/GlobalContext";

const Home = () => {
  const { setUsers } = useContext(GlobalContext);

  const add = () => {
    setUsers([
      { name: "Anton", age: 28 },
      { name: "Ben", age: 25 },
    ]);
  };

  return (
    <div>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Home;
