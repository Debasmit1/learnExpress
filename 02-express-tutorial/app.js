const express = require("express");
const app = express();
const { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
});

//Post Request

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please Provide Name Value" });
  }
  res.status(201).json({
    success: true,
    person: name,
  });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please Provide Name Value",
    });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    res.status(401).send("Please Provide Credentials");
  }
});

//Put Method
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id == id);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `${id} Person Doesn't exists` });
  }

  const newPeople = people.map((person) => {
    if (person.id == id) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({
    success: true,
    data: newPeople,
  });
});

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
