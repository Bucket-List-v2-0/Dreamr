const model = require('../models/dbmodel.js');

const userMController = {};

userMController.findall = (req, res, next) => {
	console.log('inside find all');
	model.User.find({}, (err, result) => {
		if (err) {
			console.log('there was an error', err);
			next();
		} else {
			console.log('Results', result);
			next();
		}
	});
};

module.exports = userMController;
