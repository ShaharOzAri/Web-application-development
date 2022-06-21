const express = require("express");
const CategoryService = require("../Service/CategoryService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await CategoryService.insertCategory(request.query);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getAll").get(async (request, response) => {
  var result = await CategoryService.getAllCategories();
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getCategoryById").get(async (request, response) => {
  var result = await CategoryService.getCategoryById(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/update").post(async (request, response) => {
  var result = await CategoryService.update(request.query);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await CategoryService.delete(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
