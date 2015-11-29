var mongoose = require('../../config/database');
var ObjectId = mongoose.Schema.ObjectId;

var Resume = new mongoose.Schema({
  title: String,
  name: String,
  age: Number,
  phone: String,
  email: String,
  education: String,
  pratice: String,
  accountId: ObjectId
});

module.exports = mongoose.model('Resume', Resume);