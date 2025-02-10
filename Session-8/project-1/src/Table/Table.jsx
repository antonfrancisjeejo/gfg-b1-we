import React from "react";
import "./Table.css";

const Table = ({ users, deleteUser, loadData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Contact</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.contact}</td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
              <td>
                <button onClick={() => loadData({ user, id: index })}>
                  Update
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
