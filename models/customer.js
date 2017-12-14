var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var Customer = mongoose.model('Customer', customerSchema);

// make this available to our users in our Node applications
module.exports = Customer;