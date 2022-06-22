const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  fullname: { type: String },
  telephone: { type: String },
  registrationdate: { type: Date, default: Date.now },
  apikey: { type: String, unique: true, required: true },
});

module.exports = mongoose.model("Client", schema);
