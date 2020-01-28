const pool = require("../../config/db");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into crypto(CMID, Name, CurrentPrice, OpeningPrice, LowestPrice, HighestPrice, URL) values (?, ?, ?, ?, ?, ?, ?)",
      [
        data.CMID,
        data.Name,
        data.CurrentPrice,
        data.OpeningPrice,
        data.LowestPrice,
        data.HighestPrice,
        data.URL
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCryptoByID: (cmid, callBack) => {
    pool.query(
      `select * from crypto where CMID = ?`,
      [cmid],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  }
};
