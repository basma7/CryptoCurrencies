const pool = require("../../config/db");
const https = require("https");

module.exports = {
  addKeyword: (data, iduser, callBack) => {
    pool.query(
      "insert into keyword (keyword, IDUSER) values (?, ?)",
      [data.keyword, iduser],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getKeyword: (iduser, callBack) => {
    pool.query(
      "select keyword from keyword where iduser=?",
      [iduser],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteKeyword: (keyword, userid, callBack) => {
    pool.query(
      "delete from keyword where keyword=? and iduser=?",
      [keyword, userid],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
