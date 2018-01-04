var mongoose = require('mongoose');

var orderSchema = mongoose.Schema({

    userId:{
        type: String,
        required:true
    },
    orderItems:{

        type:Array,
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