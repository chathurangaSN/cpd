var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({
    orderID:{
        type:String,
        unique:true
    },
    orderName:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    quality:{
        type:String,
        required:true
    },
    unitPrize:{
        type:Number,
        required:true
    },
    ingredient:{
        type:String,
        required:true
    },
    orderType:{
        type:String,
        required:true
    },
    productID:{
        type:Number,
        required:true
    },
    userID:{
        type:Number,
        required:true
    },
    orderLevel:{
        type:Number,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }

});
var Order = mongoose.model('Order',  orderSchema);

// make this available to our users in our Node applications
module.exports =  Order;