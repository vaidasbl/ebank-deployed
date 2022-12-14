const mongoose = require("mongoose");
const express = require("express");
const app = express();

const userRouter = require("./user/UserRouter");
app.use("/api/bank/users", userRouter);

app.use(express.json());
app.use(express.static("CLIENT/build"));

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/bankdb")
  .then(() => console.log("connected to bankdb"))
  .catch((err) => console.error("failed to connect to bankdb", err));
