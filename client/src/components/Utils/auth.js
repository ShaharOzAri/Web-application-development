import { createContext, useContext, useState } from "react";

const Authcontext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = () => {
    return sessionStorage.getItem("user");
  };

  const login = (userTemp) => {
    sessionStorage.setItem("user", JSON.stringify(userTemp));
    setUser(userTemp);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const update = (updatedUser) => {
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <Authcontext.Provider value={{ user, login, logout, update, getUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
