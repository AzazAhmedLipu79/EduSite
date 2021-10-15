import React, { createContext } from "react";

import UseFireBase from "../Hooks/UseFireBase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = UseFireBase();
  return (
    <div>
      <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
