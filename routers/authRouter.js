const express = require("express");
const router = express.Router();
const passport = require("passport");

//  google authentication callback

router.get("/google/callback", passport.authenticate("google"));

module.exports = router;
