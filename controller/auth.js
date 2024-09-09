const express = require("express");
const User = require("../model/users");
const Admin = require("../model/admin");
const bcrypt = require("bcrypt");

const router = express.Router();
const sendConfirmationEmail = require("../services/email");

router.post("/register", async (req, res, next) => {
  try {
    // Create new user
    const newUser = await User.create(req.body);

    // Send success response
    sendConfirmationEmail(req.body.email, "");

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
router.post("/register/admin", async (req, res, next) => {
  try {
    // Create new user

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await Admin.create({
      email: req.body.email,
      password: hashedPassword,
    });

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
    const user = await Admin.findOne({ email: req.body.email });

    if (user) {
      // Compare provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (isMatch) {
        // Passwords match, user is authenticated
        console.log("Login successful");
      } else {
        // Passwords don't match
        console.log("Invalid password");
      }
    } else {
      // No user found with that email
      console.log("User not found");
    }

    res.status(200).json(user);
  } catch (err) {
    // res.status(500).json(err);
    next(err);
  }
});

module.exports = router;
