const jwt = require("jsonwebtoken");
const cfg = require("../config/config");

const create_token = (apikey, username) => {
  return jwt.sign(
    { apikey: apikey, username: username},
    cfg.jwt_secret,
    { expiresIn: cfg.jwt_expires }
  );
};

module.exports = create_token;
