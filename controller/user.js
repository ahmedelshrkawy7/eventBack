const express = require("express");
const User = require("../model/users");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
