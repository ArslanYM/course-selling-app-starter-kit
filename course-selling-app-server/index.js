const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose
  .connect(
    "mongodb+srv://arsalanmalik:663663@cluster0.z2buagq.mongodb.net/courses",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "courses",
    }
  )
  .then(() => {
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((e) => {
    console.error(e);
  });
