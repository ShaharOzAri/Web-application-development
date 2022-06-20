const express = require("express");
const userService = require("../Service/OrderService");
const router = express.Router();

router.route("/create").post((request, response) => {});

router.route("/getOrdersByDate").get((request, response) => {});

router.route("/getOrderById").get((request, response) => {});

router.route("/getOrdersByUser").get((request, response) => {});

router.route("/update").post((request, response) => {});

router.route("/delete").post((request, response) => {});

module.exports = router;
