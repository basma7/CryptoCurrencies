const {
  create,
  getCMID,
  getCryptos,
  getCryptoPeriod,
  deleteCrypto
} = require("../services/crypto.service");

module.exports = {
  addCurrency: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },
  getCMID: (req, res) => {
    getCMID((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getCrypto: (req, res) => {
    const cmid = req.params.cmid;
    getCryptos(cmid, (err, results) => {
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
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  getCryptoPeriod: (req, res) => {
    const cmid = req.params.cmid;
    const period = req.params.period;
    getCryptoPeriod(cmid, period, (err, results) => {
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
  deleteCrypto: (req, res) => {
    const data = req.body;
    deleteCrypto(data.cmid, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record Not Found"
        });
      }
      return res.json({
        success: 1,
        message: "crypto deleted successfully"
      });
    });
  },
  getCryptos: (req, res) => {
    getCMID((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      var list = "";
      results.forEach(element => {
        list += element.CMID + ",";
      });
      console.log(list);
      getCryptos(list, (err, results) => {
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
        return res.json({
          success: 1,
          data: results
        });
      });
    });
  }
};
