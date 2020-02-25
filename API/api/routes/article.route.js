const router = require("express").Router();
const { checkToken } = require("../../auth/token.validation");
const {
  getArticles,
  getArticle
} = require("../controllers/article.controller");

//Get Articles
router.get("/articles",checkToken, getArticles);

//Get Article By ID
router.get("/article/:id",checkToken, getArticle);

module.exports = router;
