const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
app.use(express.json());

dotenv.config({});
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.error(err);
  });
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.listen(process.env.PORT, (req, res) => {
  console.log(`Listening to ${process.env.PORT}`);
});
