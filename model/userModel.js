const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);
const userModel = mongoose.model("user", schema);
module.exports = userModel;
