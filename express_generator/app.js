const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {MongoClient}  = require('mongodb');
const dotenv = require('dotenv/config');
const cors = require("cors");


const app = express();

// CORS

const corsOptions = {

  origin:"http://localhost:3000/",
  credentials:true,
  optionSuccessStatus:200
}

app.use(cors(corsOptions));


// Routes

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const addPersonRouter = require("./routes/addPerson.js");


// mongodb

const uri = process.env.DATABASE_URI;

const client = new MongoClient(uri,{useNewUrlParser:true, useUnifiedTopology:true});

client.connect(async err=>{
  console.log("Connected to DB");
})



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
/* app.use("/addPerson", addPersonRouter); */

app.post('/addPerson', async function(req, res, next) {

  const collection = client.db("ricky").collection("chars");

  const result = await collection.insertOne(req.body);
  
  res.send(req.body)

});



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

app.listen(3000,()=>{
  console.log("Server arbeitet...");
})

const name = "ahmet";
 
module.exports = {app,client,name};

