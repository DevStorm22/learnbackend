import React, { useContext } from "react";
import { UserContext } from "../context/user.context.jsx";

function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      {userData ? `Hello, ${userData.user.firstName}` : "Loading..."}
    </div>
  );
}


export default Home;
