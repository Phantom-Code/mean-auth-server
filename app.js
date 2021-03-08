const express = require("express");
const app = express();
const logger = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
//
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
//
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db");
  }
);
//
app.use(logger("dev"));
app.use(express.json());
//
app.use("/api/user", authRoute);
app.use("/api/profile", profileRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
