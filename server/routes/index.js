const { Router } = require("express");

const { userController } = require("./controllers");
const jwtController = require("./controllers/jwtController");

const router = Router();

// router.post(
//   "/signup",
//   userController.create,
//   jwtController.loginUser,
//   (req, res) => {
//     res.status(200).json(res.locals.user);
//   },
// );

// router.post(
//   "/login",
//   userController.validate,
//   jwtController.loginUser,
//   (req, res) => {
//     res.status(200).json(res.locals.user);
//   },
// );

// router.get("/verify", jwtController.isLoggedIn, (req, res) => {
//   res.status(200).json(res.locals);
// });

router.post(
  "/saveActivity",
  // jwtController.isLoggedIn,
  userController.createAct,
  (req, res) => {
    res.status(200).json(res.locals.user);
  },
);

router.get(
  "/all",
  jwtController.isLoggedIn,
  userController.getAll,
  (req, res) => {
    res.status(200).json(res.locals.userList);
  },
);
module.exports = router;
