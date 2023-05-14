// PKG
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
// IMPORTS
const conn = require("./config/config"); //database connection

const PORT = process.env.PORT || 8007;
const app = express();
conn();

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`The Server is connected to port: ${PORT}.`.cyan.underline);
  } else {
    console.log(`Connection failed: ${err}`.red);
  }
});
