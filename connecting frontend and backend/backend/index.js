import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const password = process.env.PASSWORD;

app.use(express.json()); // express.json() is a middleware that parses incoming JSON requests and puts the parsed data in req.body

app.use(
  cors({
    origin: "http://localhost:5173", // allow only this origin to access the resources
  })
); // cors() is a middleware that enables CORS. Normal cors() allows every origin (domain) to access the resources.

// app.use((req, res, next) => {
//   if (req.body.pass !== password) {
//     return res.status(401).send("Unauthorized");
//   }
//   next();
// }); // custom middleware to check for password in req.body

app.get("/", (req, res) => {
  res.header("X-username", "kaushik"); // res.header() is used to set a custom header in the response. NOTE: whenever you are setting a custom header, custom header should start with 'x-'
  res.set("X-age", "21"); // res.set() is an alias for res.header()
  res.set("X-location", "India"); // This custom header is created for the testing purpose
  console.log(req.headers); //res.headers contains the headers sent by the client
  console.log(req.get("User-Agent")); // req.get() is used to get a specific header
  res.removeHeader("X-location"); // res.removeHeader() is used to remove a specific header from the response
  res.json({ name: "kaushik", age: 21 });
});

// app.post("/", (req, res) => {
//   console.log(req.body); // req.body contains the parsed JSON data sent by the client
//   res.send("Data received"); // res.send() sends a response to the client
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});

// CORS is Cross-Origin Resource Sharing
// CORS is a security feature in web browsers that prevents request from different origins (domains) from accessing resources on a web server unless explicitly allowed by the server.
