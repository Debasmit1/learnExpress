//As the few part of the url is common so we are using express routes

const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

// router.get("/", getPeople);

// //Post Request

// router.post("/", createPerson);

// router.post("/postman", createPersonPostman);

// //Put Method
// router.put("/:id", updatePerson);

// //Delete Person
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPerson);
router.route("/postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
