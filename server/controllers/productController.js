//dependencies
Product = require('../models/product');

// get product
module.exports.getProduct = function(callback){
    console.log('Controller get method called');
    Product.find({}).sort({'_id': -1}).exec(callback);
}

// get product
module.exports.getProductById = function(productId, callback){
    console.log('Controller get product by id method called');
    Product.findById(productId, callback);
}

// save product
module.exports.saveProduct = function(obj, callback){
    //console.log(obj.productName);
    console.log('Controller save method called');
    const product = new Product({
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
    console.log(obj);
    var query = {'_id':obj._id};
    var newData = {
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
