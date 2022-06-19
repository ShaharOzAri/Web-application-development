const express = require("express");
const userService = require("../Service/ProductService");
const router = express.Router();

router.route("/create").post((request, response) => {});

router.route("/getAll").get((request, response) => {});

router.route("/getProductById").get((request, response) => {});

router.route("/getProductByName").get((request, response) => {});

router.route("/getProductsByCategory").get((request, response) => {});

router.route("/update").post((request, response) => {});

router.route("/delete").post((request, response) => {});

module.exports = router;
