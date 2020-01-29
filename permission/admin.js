const pool = require("../../config/db");
module.exports = {
  checkAdmin: (id, callBack) => {
    pool.query(
      "select admin from user where id = ",
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
