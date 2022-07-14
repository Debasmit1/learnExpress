const express = require("express");
const app = express();
const { products } = require("./data");

// app.get("/", (req, res) => {
//   res.status(200).send([
//     {
//       name: "Debasmit",
//     },
//     {
//       name: "Sasmita",
//     },
//   ]);
// });
//app.use(express.static("./data"));

// app.get("/", (req, res) => {
//   res.send(products);
// });

//Home Page
app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1><a href="/api/products">Products</a>`);
});

//Directed from Home Page
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  // res.json(products);
  res.json(newProducts);
});

//Directed from API
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.find((product) => product.id === 1);

  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log(`Server is live on port 5000...`);
});
