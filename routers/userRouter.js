const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.addUser, (req, res) => {
  res.send();
});

module.exports = router;
