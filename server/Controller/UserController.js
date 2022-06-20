const express = require("express");
const userService = require("../Service/UserService");
const router = express.Router();

router.route("/signup").post((request, response) => {
  // console.log(request.body.params);
  var user = request.body.params;
  userService.insertUser(user);
});

router.route("/signin").post((request, response) => {});

router.route("/update").post((request, response) => {});

router.route("/delete").post((request, response) => {});

module.exports = router;
