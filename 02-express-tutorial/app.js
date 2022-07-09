const express = require("express");
const app = express();
const path = require("path");

//const express = require('express')();

//setup static and middleware
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("Not available");
});

app.listen(5000, () => {
  console.log(`Server is live on 5000`);
});

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
