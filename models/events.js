
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dbSchema = new Schema({
    eventImage: {
        type: String,
        required: true
    },
    eventName:{
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        required: true
    },

    totalSeats: {
        type: Number,
        required: true
    }
});


// Export the model
module.exports = mongoose.model('events', dbSchema);

