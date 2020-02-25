const pool = require("../../config/db");
const https = require("https");

module.exports = {
  getArticles: callBack => {
    const options = {
      //feeds ,categories, excludeCategories,lTs
      //  min-api.cryptocompare.com/data/v2/news/?lang=AR
      hostname: "min-api.cryptocompare.com",
      path: `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
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
  }
};
