// context file to provide server URL to all components

import React, { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState();
  const serverURL = "http://localhost:4000";

  const getUserdata = async () => {
    try {
      const { data } = await axios.get(`${serverURL}/api/user`, {
        withCredentials: true,  //  send cookies with request
      });
      setUserData(data);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUserdata();
  }, []);
  const value = {
    serverURL,
    userData,
    setUserData,
    getUserdata,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
