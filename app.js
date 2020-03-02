require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/routes/user.route");
const cryptoRouter = require("./api/routes/crypto.route");
const articleRouter = require("./api/routes/article.route");

app.use(express.json());
app.use("/api/users", userRouter, cryptoRouter, articleRouter)

// start the app
app.listen(process.env.APP_PORT, () => {
  console.log("Express is running on port", process.env.APP_PORT);
});