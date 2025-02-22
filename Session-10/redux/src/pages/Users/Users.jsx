import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/User/User";

const Users = () => {
  const users = useSelector((state) => state.usersInfo.users);

  return (
    <div className="users">
      <h1 className="users__title">Users</h1>
      <div className="users__container">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
