const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO + "/SYSnovel").then(() => {
      console.log("DB CONNECTED");
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;
