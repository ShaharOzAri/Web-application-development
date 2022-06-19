const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: Date,
  productIds: Array,
  totalSum: Double,
  userId: ObjectId,
  address: {
    city: String,
    street: String,
    number: String,
    postalCode: Number,
  },
});

const orders = mongoose.model("Orders", OrderSchema);

module.exports = orders;
