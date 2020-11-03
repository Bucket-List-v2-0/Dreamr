const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

function generateHash(user) {
  if (user === null) {
    throw new Error("No found employee");
  } else if (!user.changed("password")) return user.password;
  else {
    const salt = bcrypt.genSaltSync();
    return (user.password = bcrypt.hashSync(user.password, salt));
  }
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    validPassword(password) {
      return bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      bucket_list: DataTypes.ARRAY(DataTypes.TEXT),
      loggedIn: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    },
  );

  User.beforeCreate(generateHash);
  User.beforeUpdate(generateHash);
  return User;
};
