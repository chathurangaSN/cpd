var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    commentID:{
        type:Number,
        unique:true
    },
    commentType:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    orderID:{
        type:Number,
        required:true
    },
    userID:{
        type:Number,
        required:true
    },
    rate:{
        type:Number,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var Comment = mongoose.model('Comment', commentSchema);

// make this available to our users in our Node applications
module.exports = Comment;