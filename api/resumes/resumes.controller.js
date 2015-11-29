var Resume = require('./resumes.model');

exports.create = function (req, res) {

  var resume = new Resume(req.body.data);

  resume.save();

  res.send({ status: 200, msg: 'OK' });

};

exports.getResumesByAccount = function (req, res) {
  Resume.find({ accountId: req.params.accountId }).exec()
  .then(function (resumes) {
    res.send({ status: 200, msg: 'OK', data: resumes });
  });
};

exports.getResumesById = function (req, res) {
  Resume.findOne({ _id: req.params.resumeId })
  .then(function (resume) {
    res.send({ status: 200, msg: 'OK', data: resume });
  });
};