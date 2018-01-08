var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
        
    },
    quantity:{
        type:Number
       
    },
    unitPrize:{
        type:Number,
        required:true
    },
    ingredient:{
        type:Array,
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