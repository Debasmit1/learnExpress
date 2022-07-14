const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");
//req => middleware => res

//app.use([logger, authorize]);

// 1. use vs route
// 2. options - our own / express /third party

//app.use(express.static("./public"));
//morgan npm 3rd party

app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
