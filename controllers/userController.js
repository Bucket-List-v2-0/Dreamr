const db = require("../models/dbmodel");

userController = {};

userController.findUser = (req, res, next) => {
  console.log("inside finder");
  // console.log(req.body)
  let query =
    "select username,id from users where username = ($1) and password  = ($2)";
  let params = [req.body.username, req.body.password];

  db.query(query, params, (err, result) => {
    if (err) {
      console.log(err);
      res.status(201);
      next();
    } else {
      if (result.rows.length === 0) {
        console.log("No user found");
        res.status(204);
      }
      res.locals.user = result.rows[0];
      // console.log(result)
      console.log("found user");
      next();
    }
  });
};

userController.addUser = (req, res, next) => {
  let query = "insert into users (username, password) values ($1,$2);";
  let params = [req.body.username, req.body.password];

  db.query(query, params, (err, result) => {
    if (err) {
      console.log(err);
      res.status(201);
      next();
    } else {
      console.log("signed up");
      next();
    }
  });
};

userController.deleteUser = (req, res, next) => {
  let query = "delete from users where id = ($1)";
  let params = [req.body.id];

  db.query(query, params, (err, result) => {
    if (err) {
      console.log(err);
      res.status(201);
      next();
    } else {
      next();
    }
  });
};

module.exports = userController;
