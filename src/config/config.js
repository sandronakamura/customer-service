const cfg = () => {
  return {
    port: "3000",
    db_path: "mongodb+srv://sandro:sandro123@eyes4u.azjaj.mongodb.net/25MOB",
    salt: 10,
    jwt_secret: "sss",
    jwt_expires: "2d",
  };
};

module.exports = cfg();
