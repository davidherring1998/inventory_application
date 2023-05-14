const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split("")[1];
      const decoded = jtw.verify(token, process.env.SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res
        .status(401)
        .json({ msg: `You are not authorized, please contact support.` });
    }
    if (!token) {
      res
        .status(401)
        .json({ msg: `You are not authorized, please contact support.` });
    }
  }
});
module.exports = { protect };
