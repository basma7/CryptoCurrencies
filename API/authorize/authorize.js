const { verify } = require("jsonwebtoken");

module.exports = {
  checkAdmin: (req, res, next) => {
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
          console.log("ID: " + decoded.result.id);
          console.log("Admin: " + decoded.result.admin);
          if (decoded.result.admin == 0) {
            return res.json({
              success: 0,
              message:
                "Access Denied! Unauthorized User, Sorry you're not admin"
            });
          } else {
            next();
          }
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
