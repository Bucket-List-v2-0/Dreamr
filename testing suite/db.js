const mongoose = require('mongoose');
const { User, Bucket } = require('../models/dbmodel.js');
const userData = {
	GoogleId: 'TekLoon',
	DisplayName: 'Male',
	firstName: 'Facebook',
};

describe('User Model Test', () => {
	// It's just so easy to connect to the MongoDB Memory Server
	// By using mongoose.connect
	let connection;
	let db;

	beforeAll(async () => {
		connection = await MongoClient.connect(global.__MONGO_URI__, {
			useNewUrlParser: true,
		});
		db = await connection.db(global.__MONGO_DB_NAME__);
	});

	afterAll(async () => {
		await connection.close();
		await db.close();
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
			DisplayName: 'Mark',
			firstName: 'TekLoon',
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();
		expect(savedUserWithInvalidField.photos).toBeDefined();
		expect(savedUserWithInvalidField.nickkname).toBeUndefined();
	});

	// Test Validation is working!!!
	// It should us told us the errors in on gender field.
	xit('create user without required field should failed', async () => {
		const userWithoutRequiredField = new User({ name: 'TekLoon' });
		let err;
		try {
			const savedUserWithoutRequiredField = await userWithoutRequiredField.save();
			error = savedUserWithoutRequiredField;
		} catch (error) {
			err = error;
		}
		expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(err.errors.gender).toBeDefined();
	});
});
