var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pickRouter = require('./routes/pick');
var ribrouter = require('./routes/ribbon')
var grouter = require('./routes/grid')
var ribbon = require("./models/ribbon");
var resourcerouter = require('./routes/resource')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username })
  .then(function (user){
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  })
  .catch(function(err){
  return done(err)
  })
  })
  )

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pick', pickRouter);
app.use('/ribbon', ribrouter);
app.use('/grid', grouter);
app.use('/resource', resourcerouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await ribbon.deleteMany();
let instance1 = new
ribbon({ribbon_type:"cloth", ribbon_usedfor:'all',
ribbon_length:15.4});
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance2 = new
ribbon({ribbon_type:"satian", ribbon_usedfor:'events',
ribbon_length:15});
instance2.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
let instance3 = new
ribbon({ribbon_type:"metallic", ribbon_usedfor:'ocassions',
ribbon_length:14});
instance3.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});
}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;

