const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Create a new user
//Post request
//Api/users/
const createUser = asyncHandler(async (req, res) => {
  res.status(201).json({ msg: `Hello there` });
});

//
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, { expiresIn: "30d" });
};

module.exports = {
  createUser,
};
