const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Double,
  description: String,
  images: Array,
  material: String,
  type: String,
  category: ObjectId,
});

const products = mongoose.model("Products", ProductSchema);

module.exports = products;
