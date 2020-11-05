const mongoose = require('mongoose');
const regeneratorRuntime = require('regenerator-runtime');
const { User, Bucket } = require('./models/dbmodel.js');
const userData = {
	GoogleId: 'TekLoon',
	DisplayName: 'Male',
	firstName: 'Facebook',
};

describe('User Model Test', () => {
	// It's just so easy to connect to the MongoDB Memory Server
	// By using mongoose.connect

	beforeAll(async () => {
		await mongoose.connect(
			global.__MONGO_URI__,
			{ useNewUrlParser: true, useCreateIndex: true },
			(err) => {
				if (err) {
					console.error(err);
					process.exit(1);
				}
			}
		);
	});

	it('create & save user successfully', async () => {
		const validUser = new User(userData);
		const savedUser = await validUser.save();
		// Object Id should be defined when successfully saved to MongoDB.
		expect(savedUser._id).toBeDefined();
		expect(savedUser.GoogleId).toBe(userData.GoogleId);
		expect(savedUser.DisplayName).toBe(userData.DisplayName);
		expect(savedUser.firstName).toBe(userData.firstName);
	});

	// Test Schema is working!!!
	// You shouldn't be able to add in any field that isn't defined in the schema
	it('insert user successfully, but the field does not defined in schema should be undefined', async () => {
		const userWithInvalidField = new User({
			GoogleId: '123',
			DisplayName: 123,
			firstName: 'TekLoon',
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();
		expect(savedUserWithInvalidField.GoogleId).toBeDefined();
		expect(savedUserWithInvalidField.nothing).toBeUndefined();
	});
});
