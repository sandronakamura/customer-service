const jwt = require("jsonwebtoken");
const cfg = require("../config/config");

const check_token = (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).send({ output: `Não autorizado` });

  jwt.verify(token, cfg.jwt_secret, (error, result) => {
    if (error)
      return res.status(401).send({ output: `Token inválido: ${error}` });
    req.data = {
      apikey: result.apikey,
      username: result.username
    };
    next();
  });
};

module.exports = check_token;
