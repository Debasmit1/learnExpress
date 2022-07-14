const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Debasmit") {
    req.user = {
      name: "Debasmit",
      id: 1,
    };
    next();
  } else {
    res.status(404).send("unauthorized");
  }
};

module.exports = authorize;
