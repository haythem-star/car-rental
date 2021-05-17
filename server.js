const express = require("express");
const connectDB = require("./config/connectDB");
const path = require("path");
const app = express();
require("dotenv").config();
connectDB();

// middleware global
app.use(express.json());
// router
app.use("/api/user", require("./router/user"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running", PORT)
);
