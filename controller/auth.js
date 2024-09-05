const express = require("express");
const User = require("../model/users");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    // Create new user
    const newUser = await User.create(req.body);

    // Send success response
    res.status(201).json({
      message: "New user is created",
      user: newUser,
    });
  } catch (err) {
    // Send error response with status code and error message
    // res.status(422).json({
    //   message: "Unable to create new user",
    //   error: err.message || err, // Return a descriptive error message
    // });
    next(err);
  }
});
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).send("user not found");
    // const validPassword = await bcrypt.compare(
    //   req.body.password,
    //   user.password
    // );
    // !validPassword && res.status(401).json("wrong password");

    res.status(200).json(user);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
});

module.exports = router;
