const express = require('express');

const router = express.Router();
const listController = require('../controllers/listController.js');

// router activated on: /list
router
	.route('/')
	.get(listController.getList)
	.post(listController.createOneListItem);

router
	.route('/:id')
	.put(listController.updateListItem)
	.delete(listController.deleteListItem)
	.get(listController.getOneListItem)
	.post(listController.addComment);

module.exports = router;
