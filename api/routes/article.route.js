const router = require("express").Router();

const {

    createArticle,
    getAllArticle,
    getArticleById

} = require("../controllers/article.controller");

router.post("/article", createArticle);
router.get("/article", getAllArticle);
router.get("/article/:id", getArticleById);
module.exports = router;