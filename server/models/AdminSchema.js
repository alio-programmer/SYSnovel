const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const AdminSchema = new mongoose.Schema(
  {
    Admin_name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      requrired: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    secretkey: {
      type: String,
      required: true,
      default: process.env.ADMINKEY,
    },
  },
  { timestamps: true }
);

AdminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JSONKEY, {
    expiresIn: "7d",
  });
  return token;
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = { Admin };
