//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./router');

//this is for connect frontend and backend
var cors = require('cors');


var app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// controllers
const customerController = require('./controllers/customerController');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');
const commentController = require('./controllers/commentController');
const orderController = require('./controllers/orderController');

//connect to mongoose
mongoose.connect('mongodb://localhost:27017/cpdsystemdb', function (err) {
  if (err) throw err;
  console.log('Mongodb Successfully connected');
});

app.use(router);

app.listen(3000, () => console.log('CPDsystem app is listening on port 3000!'))