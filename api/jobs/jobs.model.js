var mongoose = require('../../config/database');
var ObjectId = mongoose.Schema.ObjectId;

var Job = mongoose.Schema({
  name: String,
  salary: Number,
  place: String,
  education: String,
  duty: String,
  requirement: String,
  accountId: ObjectId
});

module.exports = mongoose.model('Job', Job);