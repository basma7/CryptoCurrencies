const {
  getKeyword,
  deleteKeyword,
  addKeyword
} = require("../services/keyword.service");

module.exports = {
  addKeyword: (req, res) => {
    const body = req.body;
    const iduser = req.USERID;
    console.log(iduser);
    addKeyword(body, iduser, (err, results) => {
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
  getKeyword: (req, res) => {
    const iduser = req.USERID;
    console.log(iduser);
    getKeyword(iduser, (err, results) => {
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
  deleteKeyword: (req, res) => {
    const data = req.body;
    const iduser = req.USERID;
    deleteKeyword(data.keyword, iduser, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (results) {
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
