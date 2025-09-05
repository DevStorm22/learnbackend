// context file to provide server URL to all components

import React, { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const serverURL = "http://localhost:4000";

  return <UserContext.Provider value={{ serverURL }}>{children}</UserContext.Provider>;
}

export default UserProvider;
