const express = require("express");
const ProductService = require("../Service/ProductService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await ProductService.createProduct(request.body);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getAll").get(async (request, response) => {
  var result = await ProductService.getAllProducts();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getProductById").get(async (request, response) => {
  var result = await ProductService.getProductById(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getProductByName").get(async (request, response) => {
  var result = await ProductService.getProductByName(request.query.name);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getProductsByCategory").get(async (request, response) => {
  var result = await ProductService.getProductsByCategory(
    request.query.category
  );
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/update").post(async (request, response) => {
  var result = await ProductService.update(request.query);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await ProductService.delete(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
