var express = require('express');
var router = express.Router();
var controller = require('./resumes.controller');

router.post('/', controller.create);

router.get('/:resumeId', controller.getResumesById)

router.get('/accountId/:accountId', controller.getResumesByAccount);

module.exports = router;