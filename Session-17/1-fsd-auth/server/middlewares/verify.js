const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        return res.json({ msg: "Access Denied" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  } else {
    return res.json({ msg: "Invalid request" });
  }
}

module.exports = verifyToken;
