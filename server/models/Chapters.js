const mongoose = require("mongoose");

const chapterSchema = mongoose.Schema(
  {
    Chapterno: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Chapter = new mongoose.model("Chapter", chapterSchema);

module.exports = { Chapter };
