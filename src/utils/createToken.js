const jwt = require("jsonwebtoken");
const cfg = require("../config/config");

const create_token = (id, username, email) => {
  return jwt.sign(
    { id: id, username: username, email: email },
    cfg.jwt_secret,
    { expiresIn: cfg.jwt_expires }
  );
};

module.exports = create_token;
