const jwt = require("jsonwebtoken");
const cfg = require("../config/config");

const create_token = (id, username, apikey) => {
  return jwt.sign(
    { id: id, username: username, apikey: apikey },
    cfg.jwt_secret,
    { expiresIn: cfg.jwt_expires }
  );
};

module.exports = create_token;
