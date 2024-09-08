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

app.get("/", (req, res) => {
  res.status(204); // No content
});
app.use("/api/auth", auth);
app.use("/api/users", users);
app.get("/favicon.ico", (req, res) => {
  res.status(204); // No content
});
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
const password = process.env.DATABASE_PASSWORD;

const databaseUri = process.env.DATABASE.replace("<password>", password);

mongoose
  .connect(databaseUri)
  .then(() => {
    app.listen(8800, () => {
      console.log("backend server is fired");
    });
  })
  .catch((err) => {
    console.error("🚀 ~ mongoose.connect ~ err:", err);
  });
