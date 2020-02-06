require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/routes/user.route");
const cryptoRouter = require("./api/routes/crypto.route");
const articlesRouter = require('./api/routes/articles');
app.use(express.json());
app.use("/api/users", userRouter, cryptoRouter,articlesRouter);


// start the app
app.listen(process.env.APP_PORT, () =>{
  console.log('Express is running on port', process.env.APP_PORT );
});