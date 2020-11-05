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

userMController.addUser = (req,res,next) =>{
	model.User.create({
		DisplayName: req.body.name,
		password: req.body.password
	})
	.then(result => {
		console.log('this is the user id ', result._id)
		console.log('finished adding')
		res.locals.user = result._id
		return next()
	})
	.catch((err) => {console.log(err); next()})
	
	// model.User.create({})
}


userMController.login = (req,res,next) =>{
	console.log('inside the login')
	model.User.find({DisplayName: req.body.name, password: req.body.password}, (err, result) => {
		if (err) {
			console.log('there was an error', err);
			next();
		} else {
			if(result.length === 0){
				res.status(203)
				console.log('no user found')
				next()
			}
			else{
				res.locals.user = result[0]._id
				next()
			}
		}
	});
	
	// model.User.create({})
}

userMController.find = (req,res,next) => {
	model.Bucket.find({user_id : req.body.user_id})
	.then(result =>{
		console.log(result)
		res.locals.bucket = result
	})
	next()
}

module.exports = userMController;
