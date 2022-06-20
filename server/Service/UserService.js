const users = require("../Model/User");

module.exports = class UserService {
  static async insertUser(user) {
    users
      .insertMany(user)
      .then((value) => {
        console.log("Saved Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
