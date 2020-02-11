const pool = require("../../config/db");

module.exports = {
    createArticle: (data, callBack) => {
        pool.query(
            "insert into article(arid) values (?)",
            [ data.arid],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAllArticle: callBack => {
        pool.query(
            `select * from article`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getArticleById: (data, callBack) => {
        pool.query(
            `select * from article where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }

};
