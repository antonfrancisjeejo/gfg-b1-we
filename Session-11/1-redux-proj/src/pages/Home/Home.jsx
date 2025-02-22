import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addUserToCompany } from "../../slices/company";
import { addUser } from "../../slices/users";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    age: "",
    jobRole: "",
    companyId: "",
  });

  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companiesInfo.companies);

  useEffect(() => {
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        id: uuid(),
      };
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const isAvailable = (id) => {
    const isThere = companies.find((company) => company.id === id);
    return isThere ? true : false;
  };

  const handleAdd = () => {
    const isPresent = isAvailable(userInfo.companyId);
    if (isPresent) {
      dispatch(addUser(userInfo));
      dispatch(
        addUserToCompany({
          userId: userInfo.id,
          companyId: userInfo.companyId,
        })
      );

      setUserInfo({
        id: uuid(),
        name: "",
        email: "",
        contact: "",
        age: "",
        jobRole: "",
        companyId: "",
      });
    } else {
      alert("Please enter proper company id");
    }
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__formContainer">
          <h1 className="home__title">Add User Information</h1>
          <input type="text" value={userInfo.id} disabled />
          <br />
          <input
            name="name"
            placeholder="Enter user's name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter user's email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="contact"
            placeholder="Enter user's contact no"
            value={userInfo.contact}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Enter user's age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <br />
          <input
            name="jobRole"
            placeholder="Enter user's role"
            value={userInfo.jobRole}
            onChange={handleChange}
          />
          <br />
          <input
            name="companyId"
            placeholder="Enter user's company Id"
            value={userInfo.companyId}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleAdd}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
