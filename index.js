const express = require("express");
const data = require("./data");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get all data
app.get("/", (req, res) => {
  console.log(data.users); // all users in data.js file
  console.log("--------------");
  console.log(data.schedules); // all schedules in data.js file
  res.send("Hi INCODE 6!");
});
//get all users
app.get("/users", (req, res) => {
  res.send(data.users);
});
//get user by id
app.get("/users/:id", (req, res) => {
  // TODO: Validate req.params.id

  const user = data.users[req.params.id];
  res.send(user);
});

// Create new post
app.post("/users", (req, res) => {
  // TODO: Validate data
  console.log("hi this is post");
  console.log(req.body);
  // Add post to all posts
  data.users.push(req.body);
  res.send(data.users);
});

app.listen(PORT, () => {
  console.log(
    `Hey there, you're doing a great job! App listening at http://localhost:${PORT}`
  );
});
