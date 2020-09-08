var loadModel = require('../models/events');
var bookingLoadModel = require('../models/book-event');

exports.createEvent = function (req, res) {
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

function getBookings(){
    var eventData={}
    return new Promise((resolve,reject)=>{
        bookingLoadModel.find({},function(error,bookingData){
            if(error){
                reject(error);
            }
            bookingData.forEach(element => {
                console.log(element)
                if (eventData[element.eventId]) {
                    eventData[element.eventId] = eventData[element.eventId] + element.noOfSeats
                }
                else {
                  eventData[element.eventId] = element.noOfSeats
                }
              });
              resolve(eventData)
        })
    })
}
exports.getAllEvents = function (req, res) {
    
    loadModel.find({}, function (err, events) {
        if (!err) {
            getBookings().then(eventBookingData=>{
                let finalEvents=[];
                events.forEach(event=>{
                    let json=JSON.parse(JSON.stringify(event)); 
                    json['bookedCount']=eventBookingData[event._id]?eventBookingData[event._id]:0;
                    console.log({json})
                    finalEvents.push(json);
                })
                console.log(events)
                res.send({
                    success: true,
                    finalEvents
                });
            }).catch(err=>{
                res.send({
                    success:false,
                    err
                })
            })
            
            

        } else {
            res.send({
                success: false,
                message: "Something went wrong. Please try after sometime"
            })
        }
    });
}