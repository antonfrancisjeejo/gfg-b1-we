import React from "react";
import "./Company.css";
import { useDispatch, useSelector } from "react-redux";
import User from "../User/User";
import { deleteCompany } from "../../slices/company";
import { deleteUser } from "../../slices/users";

const Company = ({ id, name, users }) => {
  const usersInfo = useSelector((state) => state.usersInfo.users);
  const dispatch = useDispatch();
  const userInfo = (id) => {
    const user = usersInfo.find((user) => user.id === id);
    return user;
  };

  const removeCompany = () => {
    dispatch(deleteCompany(id));
    users.forEach((user) => {
      dispatch(deleteUser(user));
    });
  };

  return (
    <div className="company">
      <button onClick={removeCompany}>Delete</button>
      <h2>
        Id: <span>{id}</span>
      </h2>
      <h3>
        Name: <span>{name}</span>
      </h3>
      <div>
        {users.map((userId) => {
          return <User key={userId} {...userInfo(userId)} />;
        })}
      </div>
    </div>
  );
};

export default Company;
