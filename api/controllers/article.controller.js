const { createArticle, getAllArticle,getArticleById }
= require("../services/article.service");

module.exports = {

    createArticle: async (req, res, next) => {
     const arid = req.body.arid;
     createArticle(arid);

    },
    getAllArticle: async (req, res, next) => {


      getAllArticle((err,results) =>{
          if (err) {
              console.log(err);
              return;
          }
          return res.json({
              success: 1,
              data: results
          });
      });
    },getArticleById: async (req, res, next) => {

        const body = req.body;
        getArticleById(body, (err, results) => {
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
    }
};