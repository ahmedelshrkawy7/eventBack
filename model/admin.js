const mongoose = require("mongoose");

const eventAdminSchema = new mongoose.Schema({
 
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
  password: { type: String ,
    required:"must add password"
   },

});

const adminUser = mongoose.model("admin", eventAdminSchema);
module.exports = adminUser;
