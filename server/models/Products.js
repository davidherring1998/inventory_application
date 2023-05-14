const mongoose = require("mongoose");
const { schema } = require("./User");
const productSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please enter a valid category input."],
      unique: true,
    },
    subcategory: {
      type: String,
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
    color: {
      type: String,
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
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
