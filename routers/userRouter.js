const express = require('express');
const router = express.Router();
// const userController = require('../controllers/userController');
const userMongoController = require('../controllers/userMongoController');

router.get('/login/1', userMongoController.findall, (req, res) => {
	// if a user is found
	if (res.status === 204) {
		res.send();
	} else {
		// console.log(res.locals.user)
		// res.json(res.locals.user);
		res.send();
	}
});

// router.get("/login", userController.findUser, (req, res) => {
//   // if a user is found
//   if (res.status === 204) {
//     res.send();
//   } else {
//     // console.log(res.locals.user)
//     res.json(res.locals.user);
//   }
// });

// router.post("/signup", userController.addUser, (req, res) => {
//   res.send();
// });

// router.delete("/delete", userController.deleteUser, (req, res) => {
//   res.send();
// });

module.exports = router;
