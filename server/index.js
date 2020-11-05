require('dotenv').config(); // instead of saving it 
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const { User } = require('../models/dbmodel');
const cookieSession = require('cookie-session');

var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const userRouter = require('../routers/userRouter');
const listRouter = require('../routers/listRouter');
const authRouter = require('../routers/authRouter');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: ['kfhaskfh'] }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// set up routers
app.use('/user', userRouter);
app.use('/list', listRouter);
app.use('/auth', authRouter);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

app.use(passport.initialize());

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: '/auth/google/callback',
		},
		//acessToken: app use to make API request on behalf od user
		//refreshToken: used to allow an app to obtain a new access token without prompting the user
		//done is called to tell passport that we have finished looking up or creating a user
		function (accessToken, refreshToken, profile, done) {
			//passport callback function
			console.log('inside express');
			// should have the part where we add users in db somewhere here
			// console.log(profile);
			// User.findOrCreate({ GoogleId: profile.id }, function (err, user) {
			// 	console.log('this is where we get stuck');
			// 	return done(err, user);
			// });
			// console.log('this is the outside');
			User.find({ GoogleId: profile.id })
				.then((currentUser) => {
					if (currentUser) {
						//if we already have a record with the given profile ID
						done(null, currentUser);
					} else {
						//if not, create a new user
						new User({
							GoogleId: profile.id,
							DisplayName: profile.displayName,
							Image: profile.photos[0].value,
						})
							.save()
							.then((newUser) => {
								done(null, newUser);
							})
							.catch(() => console.log('error'));
					}
				})
				.catch(() => console.log('error in finding user'));
		}
	)
);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login'],
		prompt: 'select_account',
	})
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
	'/auth/google/callback',
	passport.authenticate('google', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/');
	}
);



app.get('/', (req, res) =>
	res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global middleware error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = { ...defaultErr, ...err };
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(3000, (err) => {
	if (err) return console.log(err);
	console.log('Server running and listening on 3000');
});
