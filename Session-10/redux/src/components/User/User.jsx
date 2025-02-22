import React from "react";
import "./User.css";

const User = ({ id, name, age, email, contact, jobRole, companyId }) => {
  return (
    <div className="user">
      <h2>
        Id: <span>{id}</span>
      </h2>
      <h3>
        Name: <span>{name}</span>
      </h3>
      <h3>
        Age: <span>{age}</span>
      </h3>
      <h3>
        Email: <span>{email}</span>
      </h3>
      <h3>
        Contact: <span>{contact}</span>
      </h3>
      <h3>
        Role: <span>{jobRole}</span>
      </h3>
    </div>
  );
};

export default User;
