const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

//  google authentication callback
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
	res.send('reached callback uri');
});

module.exports = router;
