const {
  getchapcontroller,
  postchapcontroller,
  deletechapcontroller,
  updatechapcontroller,
  findbychapterno,
} = require("../controllers/Chaptercontroller");

const router = require("express").Router();

router.get("/chapters", getchapcontroller);
router.post("/chapters", postchapcontroller);
router.delete("/chapters/:id", deletechapcontroller);
router.put("/chapters/:id", updatechapcontroller);
router.get("/chapters/:chapterno", findbychapterno);

module.exports = router;
