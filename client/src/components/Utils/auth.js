import { createContext, useContext, useState } from "react";

const Authcontext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  const update = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Authcontext.Provider value={{ user, login, logout, update }}>
      {children}
    </Authcontext.Provider>
  );
};

export const useAuth = () => {
  return useContext(Authcontext);
};
