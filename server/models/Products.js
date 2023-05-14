const mongoose = require("mongoose");
const { schema } = require("./User");
const { Decimal128 } = require("mongodb");
const productSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please enter a valid category input."],
      unique: true,
    },
    subcategory: {
      type: [mongoose.Schema.Types.Mixed],
      required: [true, "Please enter a valid subcategory input."],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please enter a valid name input."],
      unique: true,
    },
    quantity: {
      type: Number,
      required: [true, `Please enter an amount!`],
      min: 0,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: [true, `Please enter an pice amount!`],
      min: 0,
    },
    color: {
      type: [String],
    },
    description: {
      type: String,
    },
    notes: {
      type: String,
    },
    storageLocation: {
      type: String,
    },
    weight: {
      type: Number,
      min: 0,
      max: 1000,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
