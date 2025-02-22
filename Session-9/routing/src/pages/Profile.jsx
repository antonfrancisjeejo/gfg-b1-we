import React from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { GlobalContext } from "../components/GlobalContext";

const Profile = () => {
  const { name } = useParams();

  const { users } = useContext(GlobalContext);
  return (
    <div>
      <h1>Profile - {name}</h1>
      {users.map((user, index) => {
        return <h1 key={index}>{user.name}</h1>;
      })}
    </div>
  );
};

export default Profile;
