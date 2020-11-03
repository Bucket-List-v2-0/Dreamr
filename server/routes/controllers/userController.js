// connect to database models
const models = require("../../../db/models");

async function createAct(req, res, next) {
  try {
    const temp = res.locals.user;
    console.log(temp, req.body);
    temp.bucket_list.push(req.body.listItem);
    const updated = await models.User.update(
      {
        bucket_list: res.locals.user.bucket_list,
      },
      {
        where: { username: res.locals.user.username },
      },
    );
    if (updated) {
      console.log(updated);
      return next();
    }
  } catch (err) {
    return next(err);
  }
  return null;
}
// create
async function create(req, res, next) {
  try {
    const user = await models.User.create({
      username: req.body.username,
      password: req.body.password,
      bucket_list: [],
      loggedIn: "true",
    });
    if (user) {
      res.locals.user = user;
      return next();
    }
  } catch (err) {
    return next(err);
  }
  return null;
}

async function validate(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await models.User.findOne({ where: { username } });
    if (!user) {
      res.redirect("/login");
    } else if (!(await user.validPassword(password))) {
      res.redirect("/login");
    } else {
      res.locals.user = user;
      return next();
    }
  } catch (err) {
    return next(err);
  }
  return null;
}
async function getAll(req, res, next) {
  try {
    const users = await models.User.findAll();
    res.locals.userList = users;
    return next();
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  create,
  validate,
  createAct,
  getAll,
};
