const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  { 
    name: {
      type: String,
    },
    account: {
      type: String,
    },
    password: {
      type: String,
    },
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("user", DataSchema);
