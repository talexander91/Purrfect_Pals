const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/exampleDB")
  .then(() => console.log("MongoDB has been connected"))
  .catch((err) => console.log(err));


module.exports = mongoose.connection;
