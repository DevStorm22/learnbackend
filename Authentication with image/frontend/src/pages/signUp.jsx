import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/user.context";
import dp from "../assets/image.webp";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import editImageIcon from "../assets/pencil-solid-full.svg";

function signUp() {
  const { serverURL, userData, setUserData, getUserdata } =
    useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frontendImage, setFrontendImage] = useState(dp);
  const [backendImage, setBackendImage] = useState(null);
  const navigate = useNavigate(); // useNavigate() hook to navigate programmatically
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setBackendImage(file);
    const image = URL.createObjectURL(file);
    setFrontendImage(image);
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    try {
      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);
      if (backendImage) {
        formData.append("profileImage", backendImage);
      }
      const config = {
        headers: {
          "Content-Type": "multipart/form-data", // Content-Type is one of the header
        },
      };
      const { data } = await axios.post(
        // Use axios to make the POST request
        `${serverURL}/api/signup`,
        formData,
        { config, withCredentials: true } // withCredentials to include cookies in the request
      );
      console.log(data);
      await getUserdata();
      setUserData(data);
      alert("Sign Up Successful");
      setFirstName("");
      setLastName("");
      setUserName("");
      setEmail("");
      setPassword("");
      setFrontendImage(dp);
      setBackendImage(null);
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200">
      <div className="flex flex-col min-w-lg h-fit-content bg-gray-400 rounded-2xl p-10">
        <div className="flex flex-col items-center mb-8 w-full">
          <div className="flex flex-col items-center mb-8 font-bold text-2xl">
            Sign Up
          </div>
          <form
            className="flex flex-col items-center w-full"
            onSubmit={handleSignUp}
          >
            <div className="w-25 h-25 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden relative border-2 border-white">
              <img
                src={frontendImage}
                alt="profile"
                className="w-full h-full rounded-full"
              />
              <div
                className="absolute bottom-0 right-0 bg-black w-full h-full rounded-full opacity-0 hover:opacity-50 cursor-pointer flex items-center justify-center text-white font-bold text-2xl"
                onClick={() => fileInputRef.current.click()} // Programmatically click the hidden file input
              >
                <input
                  type="file"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                />
                <img src={editImageIcon} alt="edit" className="w-1/4 h-1/4" />
              </div>
            </div>
            <div className="gap-2 m-4 flex flex-row items-center justify-center w-full rounded-md">
              <div className="bg-gray-200 w-full rounded-md">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-200 w-full p-2 rounded-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="bg-gray-200 w-full rounded-md">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-200 w-full p-2 rounded-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="bg-gray-200 w-full mb-4 rounded-md">
              <input
                type="text"
                placeholder="User Name"
                className="bg-gray-200 w-full p-2 rounded-md"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="bg-gray-200 w-full mb-4 rounded-md">
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-200 w-full p-2 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="bg-gray-200 w-full mb-4 rounded-md">
              <input
                type="password"
                placeholder="Password"
                className="bg-gray-200 w-full p-2 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 w-fit-content p-2 rounded-md cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
        <div className="items-center text-center w-full">
          <p className="font-bold">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signUp;
