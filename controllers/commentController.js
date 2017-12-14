Comment = require('../models/comment');

// get comment
module.exports.getComment = function(callback){
    console.log('Controller get method called');
    Comment.find({},callback);
}
// save comment
module.exports.saveComment = function(obj, callback){
    //console.log(obj.name);
    console.log('Controller save method called');
    const comment = new Comment({
        'commentID' : obj.commentID,
        'commentType' : obj.commentType,
        'description':obj.description,
        'orderID' : obj.orderID,
        'userID' : obj.userID,
        'rate' : obj.rate
    });
    comment.save(callback);
}
module.exports.updateComment = function(obj, callback){
    console.log('Controller update method called');
    var query = {'_id':obj._id};
    var newData = {
        'commentID' : obj.commentID,
        'commentType' : obj.commentType,
        'description':obj.description,
        'orderID' : obj.orderID,
        'userID' : obj.userID,
        'rate' : obj.rate
    };
    Comment.findOneAndUpdate(query, newData, {upsert:true},callback);
}

module.exports.deleteComment = function(obj, callback){
    console.log('Controller delete method called');

    Comment.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

module.exports.getCommentByName = function(obj, callback){
    console.log('Controller getCommentName method called');
    // Customer....(obj._id, fuction (err, doc) {
    //     if (err) {
    //     }
    //     doc.remove(callback); //Removes the document
    // })
}
