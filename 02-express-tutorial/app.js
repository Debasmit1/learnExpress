const express = require("express");
const app = express();

const people = require("./routes/people");
const auth = require("./routes/auth");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//So we need to remove /api/people from the people.js file
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
