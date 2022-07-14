const express = require("express");
const app = express();
const { products } = require("./data");

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
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => product.id == productID);
  //const singleProduct = products.find((product) => product.id == Number(productID));
  if (!singleProduct) {
    return res.status(404).send("Product Not Available");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send(`Hello World`);
});

app.get("/api/v1/query", (req, res) => {
  //console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    //res.status(200).send("No Products matched your search");
    return res.status(200).json({
      success: true,
      data: [],
    });
  }
  return res.status(200).json(sortedProducts);
  // res.send("Hello World");
});
// /api/v1/query?name=VMWare&why=DreamJob
// /api/v1/query?search=a&limit=2
app.listen(5000, () => {
  console.log(`Server is live on port 5000...`);
});
