const router = require("express").Router();

//router.use("/locations", require("./locations"));
router.use("/events", require("./events"));

router.use((req, res, next) => {
  const error = new Error("NOT FOUND!");
  error.status = 404;
  next(error);
});

module.exports = router;
