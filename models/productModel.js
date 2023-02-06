const mongoose = require("mongoose");

var Product = mongoose.model("Product", {
  name: { type: String },
  shopName: { type: String },
  address: { type: String },
  phone: { type: Number },
  shopType: { type: String },
});

module.exports = { Product };
