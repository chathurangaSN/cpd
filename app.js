//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./router');

//var router = require('./router');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

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
  
//request for display hello world




app.listen(3000,() => console.log('CPDsystem app is listening on port 3000!'))