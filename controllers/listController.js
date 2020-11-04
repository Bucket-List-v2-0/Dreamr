const model = require('../models/dbmodel');
// const { Bucket } = require('../models/dbmodel');
const listController = {
	getList: async (req, res) => {
		try {
			const listEverything = await model.Bucket.find({});
			console.log(listEverything);
			res.json(listEverything);
		} catch (err) {
			return res
				.status(500)
				.json({ msg: 'there is an error in getList controller' });
		}
	},

	//Add a new document to the data base
	createOneListItem: async (req, res) => {
		try {
			const { category, description, completed } = req.body;
			const itemList = new model.Bucket({
				category,
				description,
				completed,
			});
			await itemList.save();
			res.json({ msg: 'created new itemList' });
		} catch (err) {
			return res.status(500).json({ msg: 'problem with createOneListItem' });
		}
	},

	//update a list item
	updateListItem: async (req, res) => {
		try {
			const { description, category, completed } = req.body;
			await model.Bucket.findByIdAndUpdate(
				{ id: req.params.id },
				{ description, category, completed }
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
};

module.exports = listController;
