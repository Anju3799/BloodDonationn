const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  bloodGroup: String
});

module.exports = mongoose.model("Donor", donorSchema);
