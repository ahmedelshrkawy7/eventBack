const express = require("express");
const auth = require("./controller/auth");
const users = require("./controller/user");
const mongoose = require("mongoose");
const AppError = require("./utils/appError");

const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

////  middlee ware
dotenv.config();

////  moddlee ware
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(cors());

app.use("/api/auth", auth);
app.use("/api/users", users);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes

  // Send a generic error response to the client
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: err.status || 500,
    stack: process.env.NODE_ENV === "development" ? err.stack : {}, // Hide stack trace in production
  });
});

mongoose
  .connect(process.env.DATABASE)
  .then((e) => {
    app.listen(8800, () => {
      console.log("backend server is fired");
    });
  })
  .catch((err) => {
    console.log("🚀 ~ mongoose.connect ~ err:", err);
  });
