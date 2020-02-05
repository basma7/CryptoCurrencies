const { getArticles, getArticle } = require("../services/article.service");

module.exports = {
  getArticle: (req, res) => {
    const id = req.params.id;
    getArticle(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getArticles: (req, res) => {
    getArticles((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  }
};
