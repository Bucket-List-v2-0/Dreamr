const db = require("../models/dbmodel");

const listController = {};

//get everything from the list table
listController.getList = (req, res, next) => {
  const results = "SELECT * FROM list;";
  db.query(results)
    .then((listItems) => {
      res.locals.listEverything = listItems.rows;
      return next();
    })
    .catch((err) => {
      return next(
        "there is an error in getList controller" + JSON.stringify(err)
      );
    });
};

//get everything from the list table for One user
listController.getListOneUser = (req, res, next) => {
  const userId = req.params.id;
  const results = "SELECT * FROM list WHERE user_id = $1";

  db.query(results, [userId])
    .then((listItems) => {
      res.locals.listItems = listItems.rows;
      console.log("all items retrieved for one user");
      return next();
    })
    .catch((err) => {
      return next(
        "there is an error in getListOneUser controller" + JSON.stringify(err)
      );
    });
};

//Add a new document to the data base
listController.createOneListItem = (req, res, next) => {
  const { description, categories, completed } = req.body;
  const userId = req.params.id;

  const newList =
    "INSERT INTO list (description, categories, completed, user_id) VALUES ($1, $2, $3, $4) RETURNING *;";
  db.query(newList, [description, categories, completed, userId])
    .then((itemList) => {
      res.locals.newItemList = itemList.rows[0];
      console.log("item created successfully");
      return next();
    })
    .catch((err) => {
      return next(
        "there is an error in createOneListItem controller" +
          JSON.stringify(err)
      );
    });
};

//update a list item
listController.updateListItem = (req, res, next) => {
  const { description, categories, completed } = req.body;
  const id = req.params._id;
  const userId = req.params.id;

  const update =
    "UPDATE list SET description = $1 categories = $2 completed = $3 user_id =$4 WHERE _id= $5 RETURNING *;";
  db.query(update, [description, categories, completed, userId, id])
    .then((newItem) => {
      res.locals.updatedItem = newItem.rows[0];
      return next();
    })
    .catch((err) => {
      return next(
        "there is an error in updateListItem controller" + JSON.stringify(err)
      );
    });
};

//delete a list item
listController.deleteListItem = (req, res, next) => {
  const id = req.params._id;
  const deletItem = "DELETE FROM list WHERE _id = $1;";
  db.query(deletItem, [id])
    .then((data) => {
      console.log("Item deleted");
      return next();
    })
    .catch((err) => {
      return next(
        "there is an error in deleteListItem controller" + JSON.stringify(err)
      );
    });
};

//get one list item
listController.getOneListItem = (req, res, next) => {
  const id = req.params._id;
  const result = "SELECT * FROM list WHERE _id =$1;";
  db.query(result, [id])
    .then((oneItem) => {
      res.locals.oneItem = oneItem.rows[0];
      return next();
    })
    .catch((err) => {
      return next("there is an error in getOneListItem" + JSON.stringify(err));
    });
};

module.exports = listController;
