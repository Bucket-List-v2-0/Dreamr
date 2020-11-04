require('dotenv').config();
const mongoose = require('mongoose');

const PG_URI = process.env.PG_URI;

mongoose
	.connect(PG_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: 'IterationProject',
	})
	.then(() => console.log('Connected to DB'))
	.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
	GoogleId: String,
	DisplayName: String,
	firstName: String,
	lastName: String,
	Image: String,
	createAt: {
		type: Date,
		Default: Date.now,
	},
});

const bucketListSchema = new Schema({
	category: String,
	description: String,
	completed: String,
	comments: [String],
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});
const Bucket = mongoose.model('Bucket', bucketListSchema);
const User = mongoose.model('User', userSchema);
module.exports = { User, Bucket };
