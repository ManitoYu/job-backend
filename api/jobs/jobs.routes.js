var express = require('express');
var router = express.Router();
var controller = require('./jobs.controller');

router.post('/', controller.create);

router.get('/', controller.getAllJobs);

module.exports = router;