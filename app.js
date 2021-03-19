var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var collegerouter = require('./routes/college');
var studentrouter = require('./routes/student');
const { dirname } = require('path');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const url = "mongodb+srv://kishore:73SLwOZfsnkRbhDE@cluster0.jqecg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connect = mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
connect.then(()=>{
  console.log("Connected to database");
})
.catch((err)=>{
  console.log(err)
})
mongoose.set("useCreateIndex",true);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(--dirname,'client','build','index.html'));
  })
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/college',collegerouter);
app.use('/student',studentrouter);

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
  res.render('error');
});

module.exports = app;
