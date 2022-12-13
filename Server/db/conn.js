const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected.....");
  })
  .catch((err) => {
    console.log("Database Connection Unsuccessfull");
  });
