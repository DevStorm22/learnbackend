import express from "express";

const app = express();
const PORT = 7000;

app.get("/", (req, res) => {
  res.send("Hello this is my server");
});

// This program is with out middleware. Middleware is a program which is used in between program.
// app.post("/", (req, res) => {
//   const data = req.body;
//   res.send("POST Data: " + data);
// });

app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;
  res.send("POST Data");
  console.log(data);
});

let users = [
  {
    id: 1,
    firstName: "Tom",
    lastName: "Cruise",
    jobTitle: "Developer",
    email: "tom.cruise1@example.com",
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Sharapova",
    jobTitle: "Designer",
    email: "maria.sharapova2@example.com",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Smith",
    jobTitle: "Manager",
    email: "john.smith3@example.com",
  },
  {
    id: 4,
    firstName: "Emma",
    lastName: "Watson",
    jobTitle: "Analyst",
    email: "emma.watson4@example.com",
  },
  {
    id: 5,
    firstName: "Robert",
    lastName: "Downey",
    jobTitle: "Engineer",
    email: "robert.downey5@example.com",
  },
  {
    id: 6,
    firstName: "Scarlett",
    lastName: "Johansson",
    jobTitle: "Designer",
    email: "scarlett.johansson6@example.com",
  },
  {
    id: 7,
    firstName: "Chris",
    lastName: "Evans",
    jobTitle: "Developer",
    email: "chris.evans7@example.com",
  },
  {
    id: 8,
    firstName: "Jennifer",
    lastName: "Lawrence",
    jobTitle: "Manager",
    email: "jennifer.lawrence8@example.com",
  },
  {
    id: 9,
    firstName: "Leonardo",
    lastName: "DiCaprio",
    jobTitle: "Engineer",
    email: "leonardo.dicaprio9@example.com",
  },
  {
    id: 10,
    firstName: "Natalie",
    lastName: "Portman",
    jobTitle: "Analyst",
    email: "natalie.portman10@example.com",
  },
  {
    id: 11,
    firstName: "Henry",
    lastName: "Cavill",
    jobTitle: "Engineer",
    email: "henry.cavill11@example.com",
  },
  {
    id: 12,
    firstName: "Anne",
    lastName: "Hathaway",
    jobTitle: "Designer",
    email: "anne.hathaway12@example.com",
  },
  {
    id: 13,
    firstName: "Will",
    lastName: "Smith",
    jobTitle: "Developer",
    email: "will.smith13@example.com",
  },
  {
    id: 14,
    firstName: "Gal",
    lastName: "Gadot",
    jobTitle: "Analyst",
    email: "gal.gadot14@example.com",
  },
  {
    id: 15,
    firstName: "Daniel",
    lastName: "Radcliffe",
    jobTitle: "Engineer",
    email: "daniel.radcliffe15@example.com",
  },
  {
    id: 16,
    firstName: "Emma",
    lastName: "Stone",
    jobTitle: "Designer",
    email: "emma.stone16@example.com",
  },
  {
    id: 17,
    firstName: "Chris",
    lastName: "Hemsworth",
    jobTitle: "Manager",
    email: "chris.hemsworth17@example.com",
  },
  {
    id: 18,
    firstName: "Margot",
    lastName: "Robbie",
    jobTitle: "Engineer",
    email: "margot.robbie18@example.com",
  },
  {
    id: 19,
    firstName: "Ryan",
    lastName: "Gosling",
    jobTitle: "Developer",
    email: "ryan.gosling19@example.com",
  },
  {
    id: 20,
    firstName: "Zooey",
    lastName: "Deschanel",
    jobTitle: "Analyst",
    email: "zooey.deschanel20@example.com",
  },
];

app.get("/user/:id", (req, res) => {
  const userId = req.params.id; // req.params is used to access the variables in the URL followed by ":" (like :id)
  const existingUser = users.find((user) => user.id == userId);
  if (existingUser) {
    res.json(existingUser); // res.json is used to print the data in json format
  } else {
    res.status(404).send("User not found");
  }
});

app.get("/search", (req, res) => {
  console.log(req.query); // req.query is used to access the query parameters in the URL.
  res.send(req.query);
});

app.get("/users", (req, res) => {
  res.send("<h1>My First Heading</h1><p>My first paragraph.</p>");
});

// RESTful API (Representational State Transfer)
// RESTful API is a way for an application to communicate with another application over the HTTP protocol.
// Benefit of RESTful API is used to send request to client from mobile application and website too.
// RESTful API sends back a response in JSON format.

app.listen(PORT, () => {
  // console.log(`Server is started`);
});

// //This is Node JS code
// import http from "http";

// const server = http.createServer((req, res) => {
//   // req -> request, res -> response
//   if (req.url == "/") {
//     res.end("Hello this is my first server"); // res.end() is used to give response to the client
//   } else if (req.url == "/about") {
//     res.end("This is about page");
//   } else if (req.url == "/contact") {
//     res.end("This is contact page");
//   } else {
//     res.end("404 not found");
//   }
// });

// server.listen(7000, () => {
//   console.log("Server is started");
// }); // 7000 is a port number where the server is listned
