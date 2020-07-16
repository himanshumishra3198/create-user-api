const express = require("express");
require("./db/mongoose");
//routers
const userRouter = require("./routers/userRouter");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("server is up on port:", port);
});
