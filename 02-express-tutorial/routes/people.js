//As the few part of the url is common so we are using express routes

const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: people,
  });
});

//Post Request

router.post("/", (req, res) => {
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

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: "Please Provide Name Value",
    });
  }
  res.status(201).send({ success: true, data: [...people, name] });
});

//Put Method
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
  const { id } = req.params; //req.params.id
  const person = people.find((person) => person.id == id);
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `${id} Person Doesn't exists` });
  }
  const newPeople = people.filter((person) => person.id != id);

  return res.status(200).json({
    success: true,
    data: newPeople,
  });
});

module.exports = router;
