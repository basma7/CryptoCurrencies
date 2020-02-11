const { verify } = require("jsonwebtoken");

module.exports = {
  getID: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.USERID = decoded.result.id
          console.log("ID: " + req.USERID);
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};
