const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/WMS")
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDb };
