const {
  getCMID,
  getCryptoPref,
  addCryptoPref,
  deleteCryptoPref
} = require("../services/prefrence.service");

module.exports = {
  getCryptoPref: (req, res) => {
    const iduser = req.USERID;
    console.log("the user Id"+iduser);
    getCMID(iduser, (err, results) => {
      console.log(results);
      if (err) {
        console.log(err);
        return;
      }
      var list = "";
      results.forEach(element => {
        list += element.CMID + ",";
      });
      console.log("List " + list);
      getCryptoPref(list, (err, results) => {
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
  },

  getCMID: (req, res) => {
    const iduser = req.USERID;
    getCMID(iduser, (err, results) => {
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
  addCryptoPref: (req, res) => {
    const body = req.body;
    const iduser = req.USERID;
    console.log(iduser);
    addCryptoPref(body, iduser, (err, results) => {
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
  deleteCryptoPref: (req, res) => {
    const data = req.body;
    const iduser = req.USERID;
    deleteCryptoPref(data.cmid, iduser, (err, results) => {
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
  }
};
