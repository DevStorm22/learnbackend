import React, { useContext, useState } from "react";
import { UserContext } from "../context/user.context";
import axios from "axios";
import viewIcon from "../assets/eye-solid-full.svg";
import hideIcon from "../assets/eye-slash-solid-full.svg";
import { useNavigate } from "react-router-dom";

function logIn() {
  const { serverURL } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(true);
  const navigate = useNavigate(); // useNavigate() hook to navigate programmatically

  const handlelogIn = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const data = await axios.post(
        // axios.post(url, data, config)
        // Use axios to make the POST request
        serverURL + "/api/login", // This is the URL to which the request is sent
        {
          // The data to be sent in the request body
          email,
          password,
        },
        { withCredentials: true } // This is the configuration object
        // withCredentials to include cookies in the request
      );
      console.log(data);
      alert("Log In Successful");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col min-w-lg h-fit-content bg-gray-400 rounded-2xl p-10">
        <div className="flex flex-col items-center mb-8 w-full">
          <div className="flex flex-col items-center mb-8 font-bold text-2xl">
            Log In
          </div>
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handlelogIn}
          >
            <div className="bg-gray-200 w-full mb-4 rounded-md h-[40px]">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 w-full p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-200 w-full mb-4 rounded-md h-[40px] flex flex-row items-center justify-between">
              <input
                type={`${viewPassword ? "text" : "password"}`}
                placeholder="Password"
                className="bg-gray-200 w-full p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={viewPassword ? hideIcon : viewIcon}
                alt="view"
                className="w-6 h-6 mr-2 cursor-pointer"
                onClick={() => setViewPassword(!viewPassword)}
              />
            </div>
            <button className="bg-blue-500 w-fit-content p-2 rounded-md cursor-pointer">
              Log In
            </button>
          </form>
        </div>
        <div className="items-center text-center w-full">
          <p className="font-bold">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default logIn;
