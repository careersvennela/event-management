
var loadModel = require('../models/book-event');

exports.create = function (req, res) {
    req.body.bookingDate = req.body.bookingDate?req.body.bookingDate:new Date();
    loadModel.create(req.body, function (err, data) {
        console.log(data)
        if (!err) {
            res.send({
                success: true,
                data
            })
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}

//To get all bookings
exports.getAllBookings = function (req, res) {
    loadModel.find({}, function (err, data) {
        console.log(data)
        if (!err) {
            res.send({
                success: true,
                data
            })
        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}