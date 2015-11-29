var router = require('express').Router();
var controller = require('./deliveries.controller');

router.post('/', controller.deliver);

router.get('/account/:accountId', controller.getDeliveriesByAccount);

router.get('/account/:accountId/jobs/:jobId?', controller.getDeliveriesByJob);

router.post('/status', controller.handleDelivery);

module.exports = router;