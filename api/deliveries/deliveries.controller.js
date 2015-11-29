var Delivery = require('./deliveries.model');
var Resume = require('../resumes/resumes.model');
var Job = require('../jobs/jobs.model');
var _ = require('lodash');

exports.deliver = function (req, res) {

  var delivery = new Delivery(req.body.data);

  delivery.save();

  res.send({ status: 200, msg: '投递成功' });

};

exports.getDeliveriesByAccount = function (req, res) {

    Resume.find({ accountId: req.params.accountId }).exec()
    .then(function (resumes) {
      resumeIds = _.pluck(resumes, '_id');
      return Delivery
        .find({ resumeId: { $in: resumeIds } })
        .populate({ path: 'jobId', model: 'Job' })
        .populate({ path: 'resumeId', model: 'Resume' })
        exec();
    }, function (err) {
      console.error(err);
    })
    .then(function (deliveries) {
      res.send({ status: 200, msg: 'OK', data: deliveries });
    }, function (err) {
      console.error(err);
    });
  
};

exports.getDeliveriesByJob = function (req, res) {

  Job.find({ accountId: req.params.accountId }).exec()
    .then(function (jobs) {
      jobIds = _.pluck(jobs, '_id');
      return Delivery
        .find({ jobId: { $in: jobIds } })
        .populate({ path: 'jobId', model: 'Job' })
        .populate({ path: 'resumeId', model: 'Resume' })
        exec();
    }, function (err) {
      console.error(err);
    })
    .then(function (deliveries) {
      res.send({ status: 200, msg: 'OK', data: deliveries });
    }, function (err) {
      console.error(err);
    });

};

exports.handleDelivery = function (req, res) {

  Delivery
    .findByIdAndUpdate(req.body.deliveryId, { status: req.body.status })
    .then(function (data) {
      res.send({ status: 200, msg: 'OK' });
    });

};
