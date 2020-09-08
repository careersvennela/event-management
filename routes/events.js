var express = require('express');
var router = express.Router();

var loadController = require('../controllers/events');

router.post('/createEvent',  loadController.createEvent);

router.get('/getAllEvents', loadController.getAllEvents);

module.exports = router;