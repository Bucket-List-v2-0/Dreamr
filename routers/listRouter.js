const express = require("express");

const router = express.Router();
const listController = require("../controllers/listController.js");

// router activated on: /list
router.get("/", listController.getList, (req, res) => {
  res.status(200).json(res.locals.listEverything);
});

router
  .route("/:id")
  .get(listController.getListOneUser, (req, res) => {
    res.status(200).json(res.locals.listItems);
  })
  .post(listController.createOneListItem, (req, res) => {
    res.status(200).json(res.locals.newItemList);
  });

router
  .route("/:id/:_id")
  .put(listController.updateListItem, (req, res) => {
    res.status(200).json(res.locals.updatedItem);
  })
  .delete(listController.deleteListItem, (req, res) => {
    res.sendStatus(204);
  })
  .get(listController.getOneListItem, (req, res) => {
    res.status(200).json(res.locals.oneItem);
  });

module.exports = router;
