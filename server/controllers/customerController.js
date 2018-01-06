//dependencies
Customer = require('../models/customer');

// get customer
module.exports.getCustomer = function(callback){
    console.log('Controller get method called');
    Customer.find({},callback);
}
// save customer
module.exports.saveCustomer = function(obj, callback){
    console.log(obj.name);
    console.log('Controller save method called');
    const customer = new Customer({
        'name' : obj.name,
        'age': obj.age
    });
    customer.save(callback);
}
module.exports.updateCustomer = function(obj, callback){
    console.log('Controller update method called');
    var query = {'_id':obj._id};
    var newData = {
        'name' : obj.name,
        'age': obj.age
    };
    Customer.findOneAndUpdate(query, newData, {upsert:true},callback);
}

module.exports.deleteCustomer = function(obj, callback){
    console.log('Controller delete method called');

    Customer.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

// module.exports.getCustomerByName = function(obj, callback){
//     console.log('Controller getCustomerName method called');
//     Customer....(obj._id, function (err, doc) {
//         if (err) {
//         }
//         doc.remove(callback); //Removes the document
//     })
// }
