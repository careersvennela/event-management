var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose=require("mongoose")
var bookEventController = require('./controllers/book-event')
var app = express();
const db_url = 'mongodb+srv://anushavennela1:Anusha19@cluster0.3w7el.mongodb.net/event-management?retryWrites=true&w=majority';
mongoose.connect(db_url, {useNewUrlParser: true },
    function(err){
    {
        if(err) {
            console.log('Some problem with the connection ' +err);
        } else {
            console.log('The Mongoose connection is ready');
        }
    }
})
// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));


// view engine setup

app.set('view engine', 'jade');
 

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  var path=require("path")
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.post('/book-event', function(req, res){
  console.log(req.body)
  bookEventController.create(req,res)
});

app.get('/getAllBookings',function(req, res){
  bookEventController.getAllBookings(req,res)
})

app.post('/getBookingsById',function(req, res){
  bookEventController.getAllBookings(req,res)
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
