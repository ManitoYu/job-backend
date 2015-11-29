var mongoose = require('../../config/database');
var ObjectId = mongoose.Schema.ObjectId;

var Delivery = new mongoose.Schema({

  jobId: ObjectId,
  resumeId: ObjectId,
  status: {
    type: Number,
    default: 0
  }

});

module.exports = mongoose.model('Delivery', Delivery);