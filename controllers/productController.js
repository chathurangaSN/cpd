//dependencies
Product = require('../models/product');

// get customer
module.exports.getProduct = function(callback){
    console.log('Controller get method called');
    Product.find({},callback);
}
// save customer
module.exports.saveProduct = function(obj, callback){
    console.log(obj.productName);
    console.log('Controller save method called');
    const product = new Product({
        'productID' : obj.productID,
        'productName': obj.productName,
        'quantity':obj.quantity,
        'quality':obj.quality,
        'unitPrize':obj.unitPrize,
        'ingredient':obj.ingredient,
        'productType':obj.productType,
        'commentID':obj.commentID

    });
    product.save(callback);
}
module.exports.updateProduct = function(obj, callback){
    console.log('Controller update method called');
    var query = {'_id':obj._id};
    var newData = {
        'productID' : obj.productID,
        'productName': obj.productName,
        'quantity':obj.quantity,
        'quality':obj.quality,
        'unitPrize':obj.unitPrize,
        'ingredient':obj.ingredient,
        'productType':obj.productType,
        'commentID':obj.commentID
    };
    Product.findOneAndUpdate(query, newData, {upsert:true},callback);
}

module.exports.deleteProduct = function(obj, callback){
    console.log('Controller delete method called');

    Product.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

module.exports.getProductByName = function(obj, callback){
    console.log('Controller getCustomerName method called');
    // Customer....(obj._id, function (err, doc) {
    //     if (err) {
    //     }
    //     doc.remove(callback); //Removes the document
    // })
}
