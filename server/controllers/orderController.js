//dependencies
Order = require('../models/order');

// get order

// module.exports.getOrder = function(callback){
//     console.log('Controller get method called');
//     Order.find({},callback);
// }

module.exports.getOrderByID = function(userId,callback){
  console.log('Controller get order  by userId method called');
  Order.findById(userId,callback);
}


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
// module.exports.updateOrder = function(obj, callback){
//     console.log('Controller update method called');
//     var query = {'_id':obj._id};
//     var newData = {
//         'orderID' : obj.orderID,
//         'orderName': obj.orderName,
//         'quantity':obj.quantity,
//         'quality':obj.quality,
//         'unitPrize':obj.unitPrize,
//         'ingredient':obj.ingredient,
//         'orderType':obj.orderType,
//         'commentID':obj.commentID,
//         'productID':obj.productID,
//         'userID':obj.userID
//     };
//     Order.findOneAndUpdate(query, newData, {upsert:true},callback);
// }

// module.exports.deleteOrder = function(obj, callback){
//     console.log('Controller delete method called');

//     Order.findById(obj._id, function (err, doc) {
//         if (err) {
//         }
//         doc.remove(callback); //Removes the document
//     })
// }

// module.exports.getOrderByName = function(obj, callback){
//     console.log('Controller getOrderName method called');
//     // Customer....(obj._id, function (err, doc) {
//     //     if (err) {
//     //     }
//     //     doc.remove(callback); //Removes the document
//     // })
// }
