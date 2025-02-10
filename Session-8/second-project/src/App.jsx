import React, { useState } from "react";

const App = () => {
  let name = "Ben";

  let [userName, setUserName] = useState("James");

  function handleClick(event) {
    console.log("name", userName);
  }

  console.log("outside fn", userName);

  return (
    <div>
      <h1>Hello world - {userName}</h1>
      <button onClick={handleClick}>Submit</button>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};

export default App;
