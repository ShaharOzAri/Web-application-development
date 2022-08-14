const mongoose = require("mongoose");
const SchemaTypes = mongoose.Schema.Types;

const Deliveries = new mongoose.Schema({
    city: String,
  });
  
  const deliveries = mongoose.model("Deliveries", Deliveries);
  
  module.exports = deliveries;