
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    bookingDate:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    phoneNumber: {
        type: String,
        required: true
    },
    noOfSeats: {
        type: Number,
        required: true
    },
    otherAttendees:{
        type: Object,
        required: false
    },
    eventId:{
        type: String,
        required: true
    }

});


// Export the model
module.exports = mongoose.model('book-event', dbSchema);

