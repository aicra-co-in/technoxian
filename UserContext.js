import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setGlobalEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <UserContext.Provider value={{ email, setGlobalEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
