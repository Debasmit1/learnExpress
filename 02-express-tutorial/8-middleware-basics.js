const express = require("express");
const app = express();
const logger = require("./logger");
//req => middleware => res
// logger is middleware
// Here in this file we can use logger for different call

// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   //res.send("Testing");
//   next();
// };

//To use the same function in every call
//We can use app.use(logger);

app.use(logger);

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
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
