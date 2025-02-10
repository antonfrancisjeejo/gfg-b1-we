import { useState } from "react";
import Table from "./Table/Table";
import "./App.css";
import { useEffect } from "react";

const App = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    age: "",
    contact: "",
  });

  const [users, setUsers] = useState([]);

  const [buttonSt, setButtonSt] = useState("add");

  const [userId, setUserId] = useState(null);

  function handleChange(e) {
    // console.log(e.target.name, e.target.value);
    const { name, value } = e.target;
    setUserInfo((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setUsers((currUsers) => {
      let newUsers = [...currUsers, userInfo];
      store(newUsers);
      return newUsers;
    });
    setUserInfo({
      name: "",
      email: "",
      age: "",
      contact: "",
    });
  }

  function deleteUser(id) {
    setUsers((currUsers) => {
      let newUsers = currUsers.filter((user, index) => index !== id);
      store(newUsers);
      return newUsers;
    });
  }

  function loadData({ user, id }) {
    setUserInfo(user);
    setUserId(id);
    setButtonSt("update");
  }

  function updateUser() {
    setUsers((currUsers) => {
      let newUsers = currUsers.map((user, index) => {
        if (index === userId) {
          return userInfo;
        }
        return user;
      });
      store(newUsers);
      return newUsers;
    });
    setUserInfo({
      name: "",
      email: "",
      age: "",
      contact: "",
    });
    setButtonSt("add");
  }

  function store(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  function getInitialData() {
    const users = JSON.parse(localStorage.getItem("users"));
    setUsers(users);
  }

  useEffect(() => {
    getInitialData();
  }, []);

  // console.log("users", users);

  return (
    <div className="app">
      <h1>User Form</h1>
      <div className="form">
        <label>Name</label>
        <br />
        <input
          value={userInfo.name}
          name="name"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          value={userInfo.email}
          name="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <label>Age</label>
        <br />
        <input
          value={userInfo.age}
          name="age"
          type="number"
          onChange={handleChange}
        />
        <br />
        <label>Contact No</label>
        <br />
        <input
          value={userInfo.contact}
          name="contact"
          type="number"
          onChange={handleChange}
        />
        <br />
        {buttonSt === "add" ? (
          <button onClick={handleClick}>Submit</button>
        ) : (
          <button onClick={updateUser}>Update</button>
        )}
      </div>

      <Table users={users} deleteUser={deleteUser} loadData={loadData} />
    </div>
  );
};

export default App;
