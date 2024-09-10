const mongoose = require("mongoose");

const eventUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"], // Field must be provided
    validate: {
      validator: function (value) {
        return value.trim().length > 0; // Ensures it's not an empty string
      },
      message: "Full name cannot be empty", // Custom error message
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"], // Field must be provided
    validate: {
      validator: function (value) {
        return value.trim().length > 0; // Ensures it's not an empty string
      },
      message: "Email cannot be empty", // Custom error message
    },
  },
  phone: { type: String },
  companyName: {
    type: String,
  },
  jobTitle: { type: String },
});

const EventUser = mongoose.model("EventUser", eventUserSchema);
module.exports = EventUser;
