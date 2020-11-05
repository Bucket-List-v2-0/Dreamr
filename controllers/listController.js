const model = require('../models/dbmodel');
// const { Bucket } = require('../models/dbmodel');
const listController = {
	getList: async (req, res) => {
		try {
			const listEverything = await model.Bucket.find({});
			res.json(listEverything);
		} catch (err) {
			return res
				.status(500)
				.json({ msg: 'there is an error in getList controller' });
		}
	},

	//Add a new document to the data base
	createOneListItem: async (req, res, next) => {
		try {
			const { category, description } = req.body;
			const itemList = new model.Bucket({
				category,
				description,
			});
			await itemList.save();
			// res.json({msg: "bucket added"});
			return next()
		} catch (err) {
			return res.status(500).json({ msg: 'problem with createOneListItem' });
		}
	},

	//update a list item
	updateListItem: async (req, res) => {
		try {
			const { category, description } = req.body;
			await model.Bucket.findByIdAndUpdate(
				{ _id: req.params.id },
				{ category, description }
			);
			res.json({ msg: 'updated list' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with updateListItem' });
		}
	},

	//to delete task - access it by task id
	deleteListItem: async (req, res) => {
		try {
			await model.Bucket.findByIdAndDelete(req.params.id);
			res.json({ msg: 'deleted task' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with delete one task' });
		}
	},

	//to get one list item
	getOneListItem: async (req, res) => {
		try {
			const job = await model.Bucket.findById(req.params.id);
			res.json(job);
		} catch (err) {
			return res.status(500).json({ msg: 'problem with getOneJob' });
		}
	},

	addComment: async (req, res) => {
		try {
			const comment = req.body.comments;
			console.log('this is the comment', comment);
			const job = await model.Bucket.findById(req.params.id);
			// push whatever they typed into the text box
			job.comments.push(comment);
			job.save();
			res.json(job);
		} catch (err) {
			return res.status(500).json({ msg: 'problem with posting comment' });
		}
	},
};

module.exports = listController;
