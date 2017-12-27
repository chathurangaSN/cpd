var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productID:{
        type:String,
        unique:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
       
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
    productType:{
        type:String,
        required:true
    },
    commentID:{
        type:String
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var Product = mongoose.model('Product', productSchema);

// make this available to our users in our Node applications
module.exports = Product;