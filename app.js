require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require("./api/routes/user.route");
const cryptoRouter = require("./api/routes/crypto.route");
const articleRouter = require("./api/routes/article.route");
const bodyParser = require('body-parser');
app.use(express.json());;
app.use("/api/users", userRouter, cryptoRouter,articleRouter);

app.use(bodyParser.json());
// start the app
app.listen(process.env.APP_PORT || 3000, () =>{
  console.log('Express is running on port', process.env.APP_PORT || 3000);
});
