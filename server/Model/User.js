const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  first_name: String,
  last_name: String,
  password: String,
  role: String,
});

const users = mongoose.model("Users", usersSchema);

module.exports = users;
