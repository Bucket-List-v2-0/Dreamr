const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));


router.get(
	'/google/callback', passport.authenticate('google'), (req, res) => {
		// console.log(req.user)
		res.redirect('/home/' + req.user._id);
	});

module.exports = router;




