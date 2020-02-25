const pool = require("../../config/db");
const https = require("https");

module.exports = {
  getCMID: (iduser, callBack) => {
    pool.query(
      `select CMID from prefrences where userid=?`,
      [iduser],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },


  getCryptoPref: (list, callBack) => {
    const currencies = "EUR";
    // const cryptoSymbols = "BTC,ETH,XRP,LTC";
    const options = {
      // https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR
      hostname: "min-api.cryptocompare.com",
      path: `/data/pricemultifull?fsyms=${list}&tsyms=${currencies}`
    };
    https
      .get(options, res => {
        let body = "";
        // set the encoding of the response object to utf-8
        res.setEncoding("utf8");
        res.on("data", data => {
          body += data;
        });
        res.on("end", () => {
          try {
            // Convert the reponse to JSON
            const output = JSON.parse(body);
            //console.log('Current cryptocurrency exchange rates');
            //console.log(output);
            return callBack(null, output);
          } catch (err) {
            console.log(`Error parsing JSON from server:${err.message}`);
          }
        });
      })
      .on("error", err => {
        console.log(`Request failed, ${err.message}`);
      });
  },
  addCryptoPref: (data, iduser, callBack) => {
    pool.query(
      "insert into prefrences (CMID, USERID) values (?, ?)",
      [data.CMID, iduser],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteCryptoPref: (cmid, iduser, callBack) => {
    pool.query(
      "delete from prefrences where cmid=? and userid=?",
      [cmid, iduser],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
