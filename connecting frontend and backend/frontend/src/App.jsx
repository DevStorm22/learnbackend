import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  async function getRes() {
    // This code is without axios
    // const res = await fetch("http://localhost:3000");
    // const data = await res.json();
    // // console.log(data);
    // data.then((e) => {
    //   console.log(e);
    // }).catch((err) => {
    //   console.log(err);
    // });

    // This code is with axios
    axios
      .get("http://localhost:3000")
      .then((e) => {
        console.log(e.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.post("http://localhost:3000", {
      name,
      age,
      location,
    });
  }
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={() => getRes()}>Send</button>
    </div>
  );
}

export default App;

// axios package is used for making HTTP requests
