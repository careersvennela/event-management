var express = require('express');
var router = express.Router();

var loadController = require('../controllers/book-event');

router.post('/book-event',  loadController.create);

router.get('/getAllBookings', loadController.getAllBookings);

module.exports = router;