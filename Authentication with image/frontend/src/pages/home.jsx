import React, { useContext } from "react";
import { UserContext } from "../context/user.context.jsx";

function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {console.log(userData.user)}
      {userData.user ? `Hello, ${userData.user.firstName}` : "Loading..."}
    </div>
  );
}


export default Home;
