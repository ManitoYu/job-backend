var router = require('express').Router();
var controller = require('./account.controller');

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);


module.exports = router;