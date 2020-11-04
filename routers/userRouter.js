const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.findUser, (req, res) => {
  // if a user is found
  if (res.status === 204) {
    res.send();
  } else {
    // console.log(res.locals.user)
    res.json(res.locals.user);
  }
});

router.post("/signup", userController.addUser, (req, res) => {
  res.send();
});

router.delete("/delete", userController.deleteUser, (req, res) => {
  res.send();
});

module.exports = router;
