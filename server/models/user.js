var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String
       
    },  
    userRole:{
        type:Number,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },    
    NIC:{
        type:String,
        required:true
    },   
    password:{
        type:String,
        required:true
    },
    commentID:{
        type:String,
        
    },
    orderID:{
        type:String,
       
    },

    create_date:{
        type:Date,
        default:Date.now
    }
});
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;