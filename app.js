require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/routes/user.route");
const cryptoRouter = require("./api/routes/crypto.route");
const articleRouter = require("./api/routes/article.route");
const prefrenceRouter = require("./api/routes/prefrence.route");
const keywordRouter = require("./api/routes/keyword.route");
var cors = require('cors')

app.use(cors(), express.json());
app.use("/api/users", userRouter, cryptoRouter, articleRouter, prefrenceRouter, keywordRouter)

// start the app
app.listen(process.env.APP_PORT, () => {
  console.log(" 💡 Express is running on port", process.env.APP_PORT);
});