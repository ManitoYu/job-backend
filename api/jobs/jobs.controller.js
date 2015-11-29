var Job = require('./jobs.model');

exports.create = function (req, res) {

  var job = new Job(req.body.data);

  job.save();

  res.send({ status: 200, msg: 'OK' });

};

exports.getAllJobs = function (req, res) {

  new Promise(function (resolve, err) {
    return Job.find(null).exec(function (err, docs) {
      if (err) reject(err);
      resolve(docs);
    });
  })
  .then(function (data) {
    res.send({ status: 200, msg: 'OK', data: data });
  })
  .catch(function (err) {
    console.error(err);
  });

};