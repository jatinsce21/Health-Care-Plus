const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://localhost:27017/?directConnection=true");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Failed to Connect MongoDb");
});

db.once("open", () => {
  console.log("Connected To MongoDB");
});
