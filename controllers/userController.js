//dependencies
User = require('../models/user');

// get customer
module.exports.getUser = function(callback){
    console.log('Controller get method called');
    User.find({},callback);
}
// save customer
module.exports.saveUser = function(obj, callback){
    console.log(obj.userName);
    console.log('Controller save method called');
    const user = new User({
        'userID':obj.userID, 
        'userName':obj.userName, 
        'firstName':obj.firstName, 
        'lastName':obj.lastName, 
        'email':obj.email, 
        'company':obj.company, 
        'userRole':obj.userRole, 
        'contactNo':obj.contactNo, 
        'address':obj.address, 
        'NIC':obj.NIC,
        'password':obj.password,
        'commentID':obj.commentID,
        'orderID':obj.orderID
    });
    user.save(callback);
}
module.exports.updateUser = function(obj, callback){
    console.log('Controller update method called');
    var query = {'_id':obj._id};
    var newData = {
        'userID':obj.userID, 
        'userName':obj.userName, 
        'firstName':obj.firstName, 
        'lastName':obj.lastName, 
        'email':obj.email, 
        'company':obj.company, 
        'userRole':obj.userRole, 
        'contactNo':obj.contactNo, 
        'addressNo':obj.addressNo, 
        'NIC':obj.NIC,
        'password':obj.password
    };
    User.findOneAndUpdate(query, newData, {upsert:true},callback);
}

module.exports.deleteUser = function(obj, callback){
    console.log('Controller delete method called');

    User.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

module.exports.getUserByName = function(obj, callback){
    console.log('Controller getUserName method called');
    // Customer....(obj._id, function (err, doc) {
    //     if (err) {
    //     }
    //     doc.remove(callback); //Removes the document
    // })
}
