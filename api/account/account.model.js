var mongoose = require('../../config/database');


var Account = new mongoose.Schema({

  email: String,
  password: String,
  role: Number

});

module.exports = mongoose.model('Account', Account);