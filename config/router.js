module.exports = function (app) {

  app.use('/api/resumes', require('../api/resumes/resumes.routes'));
  app.use('/api/jobs', require('../api/jobs/jobs.routes'));
  app.use('/api/deliveries', require('../api/deliveries/deliveries.routes'));
  app.use('/api/account', require('../api/account/account.routes'));

}


