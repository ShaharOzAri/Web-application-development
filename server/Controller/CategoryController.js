const express = require("express");
const userService = require("../Service/CategoryService");
const router = express.Router();

router.route("/create").post((request, response) => {});

router.route("/getAll").get((request, response) => {});

router.route("/getCategoryById").get((request, response) => {});

router.route("/update").post((request, response) => {});

router.route("/delete").post((request, response) => {});

module.exports = router;
