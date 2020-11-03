const jwt = require("jsonwebtoken");
const models = require("../../../db/models");

async function isLoggedIn(req, res, next) {
  try {
    const { id } = jwt.verify(req.cookies.jwt_token, process.env.JWT_SECRET);
    const user = await models.User.findOne({ where: { id } });
    if (user) {
      res.locals.user = user;
      return next();
    }
  } catch (err) {
    return next({
      log: `Error in middleware jwtController.isLoggedIn: ${err}`,
    });
  }
  return null;
}

async function loginUser(req, res, next) {
  try {
    const payload = { id: res.locals.user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie("jwt_token", token, { httpOnly: true });
    return next();
  } catch (err) {
    return next({
      log: `Error in middleware jwtController.loginUser: ${err}`,
    });
  }
}

module.exports = {
  isLoggedIn,
  loginUser,
};
