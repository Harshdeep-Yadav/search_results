const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/studentRoutes");
const { handleErrors } = require("./utils/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);

// Global Error Handler
app.use(handleErrors);

module.exports = app;
