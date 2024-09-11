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

// Middleware
dotenv.config();

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", auth);
app.use("/api/users", users);

// Handle 404 errors
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging purposes

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: err.status || 500,
    stack: process.env.NODE_ENV === "development" ? err.stack : {}, // Hide stack trace in production
  });
});

// Database connection
const password = process.env.DATABASE_PASSWORD;
const databaseUri = process.env.DATABASE.replace("<password>", password);

mongoose
  .connect(databaseUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(8310, () => {
      console.log("Backend server is running on port 8800");
    });
  })
  .catch((err) => {
    console.error("🚀 ~ mongoose.connect ~ err:", err);
  });
