const express = require("express");
const UserService = require("../Service/ProductService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await UserService.createProduct(request.body);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getAll").get((request, response) => {});

router.route("/getProductById").get((request, response) => {});

router.route("/getProductByName").get((request, response) => {});

router.route("/getProductsByCategory").get((request, response) => {});

router.route("/update").post((request, response) => {});

router.route("/delete").post((request, response) => {});

module.exports = router;
