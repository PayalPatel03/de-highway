const express = require("express");
const router = express.Router();
const Memo = require("../models/Memo");


// Add Memo
router.post("/add", async (req, res) => {

  const memo = new Memo(req.body);

  await memo.save();

  res.json(memo);
});


// Get All Memos
router.get("/", async (req, res) => {

  const memos = await Memo.find();

  res.json(memos);
});
// Delete memo
router.delete("/:id", async (req, res) => {

  await Memo.findByIdAndDelete(req.params.id);

  res.json({ message: "Memo deleted" });
});

module.exports = router;