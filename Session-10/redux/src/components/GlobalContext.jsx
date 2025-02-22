import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
