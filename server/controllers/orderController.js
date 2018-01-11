var mongoose = require('mongoose');

//dependencies
Order = require('../models/order');

// get order

module.exports.getOrder = function(callback){
    console.log('Controller get method called');
    Order.find({}).populate({
      path:  'userId',			
      model: 'User' }).sort({'_id': -1}).exec(callback);
}

module.exports.getOrderByUserId = function(userId, callback){
    console.log('Controller get order by userId method called');
    Order.find({'userId' : userId},callback);
}

// module.exports.getOrderByID = function(userId,callback){
//   console.log('Controller get order  by userId method called');
//   Order.findById(userId,callback);
// }


// save order
module.exports.saveOrder = function(obj, callback){
    // console.log(obj.orderName);
    console.log('order Controller save method called');
    console.log(obj)
    const order = new Order({
      'userId':obj.userId,
      'orderItems':obj.orderItems
    });
    order.save(callback);
}

module.exports.updateOrder = function(obj, callback){
    console.log('Controller update method called');
    var query = {'_id':obj._id};
    var newData = {
        'state' : obj.state
    };
    Order.findOneAndUpdate(query, newData, {upsert:true},callback);
}





module.exports.deleteOrder = function(obj, callback){
    console.log('Controller delete method called');

    Order.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

// module.exports.getOrderByName = function(obj, callback){
//     console.log('Controller getOrderName method called');
//     // Customer....(obj._id, function (err, doc) {
//     //     if (err) {
//     //     }
//     //     doc.remove(callback); //Removes the document
//     // })
// }
