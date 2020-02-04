const pool = require("../../config/db");
const https = require("https");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      "insert into crypto (CMID, go) values (?, ?)",
      [data.CMID, data.go],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getCMID: callBack => {
    pool.query(`select CMID from crypto`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
  getCryptos: (cmid, callBack) => {
    const currencies = "USD,EUR";
    // const cryptoSymbols = "BTC,ETH,XRP,LTC";
    const options = {
      //  min-api.cryptocompare.com/data/coin/generalinfo?fsyms=BTC,MLN,DASH&tsym=USD
      hostname: "min-api.cryptocompare.com",
      path: `/data/coin/generalinfo?fsyms=${cmid}&tsym=${currencies}`
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
  getCryptoPeriod: (cmid, period, callBack) => {
    const currencies = "EUR";
    // const cryptoSymbols = "BTC,ETH,XRP,LTC";
    const options = {
      // min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10
      //histoday
      //histominute
      hostname: "min-api.cryptocompare.com",
      path: `/data/v2/${period}?fsym=${cmid}&tsym=${currencies}&limit=5`
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
  deleteCrypto: (cmid, callBack) => {
    pool.query(
      "delete from crypto where cmid= ?",
      [cmid],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
