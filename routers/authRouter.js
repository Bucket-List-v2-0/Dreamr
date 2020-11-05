const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

//  google authentication callback
// router.get('/google/callback', passport.authenticate('google'), (req, res) => {
// 	res.redirect('/');
// 	// maybe do a res.redirect
// });

router.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/home/' + req.user[0]._id);
	}
);

module.exports = router;
