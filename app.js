const express = require("express");
const app = express();
const compression = require("compression");
const cors = require("cors");
const port = 2000;
const Router = require("./route");

app.use(cors());
app.use(compression());

app.use("/", Router.codeRoute);
app.use("/", Router.DflightRoute);
app.use("/", Router.statusRoute);
app.use("/", Router.IflightRoute);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
