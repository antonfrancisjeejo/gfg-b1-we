import React from "react";
import "./User.css";
// const User = (props) => {
const User = ({ name, age = 18 }) => {
  return (
    <div className="user__container">
      <h1>User - {name}</h1>
      {age > 18 ? (
        <h3>Age is above 18</h3>
      ) : age === 18 ? (
        <h3>Age is equal 18</h3>
      ) : (
        <h3>Age is below 18</h3>
      )}
    </div>
  );
};

export default User;
