const express = require("express");
const OrderService = require("../Service/OrderService");
const router = express.Router();

router.route("/create").post(async (request, response) => {
  var result = await OrderService.insertOrder(request.query);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/getOrdersByDate").get(async (request, response) => {
  var result = await OrderService.getOrdersByDate(request.query.date);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  }
  response.status(403).send();
});

router.route("/getOrdersByUser").get(async (request, response) => {
  var result = await OrderService.getOrdersByUser(request.query.userId);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  }
  response.status(403).send();
});

router.route("/getOrderById").get(async (request, response) => {
  var result = await OrderService.getOrderById(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/update").post(async (request, response) => {
  var result = await OrderService.update(request.query);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

router.route("/delete").post(async (request, response) => {
  var result = await OrderService.delete(request.query.id);
  if (result != null) {
    response.status(200).send({
      msg: result,
    });
  } else {
    response.status(403).send();
  }
});

module.exports = router;
