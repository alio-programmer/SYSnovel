const { Chapter } = require("../models/Chapters");

const getchapcontroller = async (req, res) => {
  try {
    const data = await Chapter.find({});
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: "Internal server error" });
  }
};

const postchapcontroller = async (req, res) => {
  try {
    const { Chapterno, title, content } = req.body;
    const newchap = await Chapter.create({
      Chapterno,
      title,
      content,
    });
    if (newchap) {
      res.status(200).json({
        _id: newchap._id,
        Chapterno: newchap.Chapterno,
        title: newchap.title,
      });
    } else {
      res
        .status(400)
        .json({ message: "there was an error adding user comment" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: "Internal server error" });
  }
};

const deletechapcontroller = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Chapter.findByIdAndDelete(id);
    if (data) {
      res.status(201).json({ message: "Chapter deleted successfully" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: "Internal server error" });
  }
};
const updatechapcontroller = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedata = req.body;
    const data = await Chapter.findByIdAndUpdate(id, updatedata, {
      new: true,
    });
    res.status(201).json({ message: "Chapter data updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: "Internal server error" });
  }
};
const findbychapterno = async (req, res) => {
  try {
    const Chapterno = req.params.chapterno;
    const data = await Chapter.find({ Chapterno: Chapterno });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(501).json({ message: "Internal server error" });
  }
};

module.exports = {
  getchapcontroller,
  postchapcontroller,
  deletechapcontroller,
  updatechapcontroller,
  findbychapterno,
};
