const express = require("express");
const app = express();
const v1apiRouter = require("./routes/v1");
const v2apiRouter = require("./routes/v2");

app.use("/api/v1", v1apiRouter);
app.use("/api/v2", v2apiRouter);

app.listen(4000, () => {
  console.log("Server is up and running");
});
