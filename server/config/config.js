const mongoose = require("mongoose");

const conn = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`The Server is connected to Mongo database.`.cyan.underline);
  } catch (err) {
    console.log(`ERROR connection to database: ${err} `.red);
    process.exit(1);
  }
};

module.exports = conn;
