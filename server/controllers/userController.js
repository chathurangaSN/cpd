//dependencies
User = require('../models/user');
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
var waterfall = require('async-waterfall');
var errors = require('common-errors');
var HTTPStatus = require('http-status');

// userlogin 
module.exports.userLogin = function (credentials, callback) {
    console.log(credentials);

    waterfall([
        function (cb) {
            console.log(credentials.email);
            User.findOne({email: credentials.email}, cb);
        },
        function (user, cb) {
            if (!user) {
                return cb(new errors.NotFoundError('User not found for given email'));
            }
            cb(null, user);
        },
        function (user, cb) {
            var valid = bcrypt.compareSync(credentials.password, user.password);
            if (valid) {
                cb(null, {isLoginSuccess: true , user: user});
            } else {
                cb({isLoginSuccess: false});
            }
        }
    ], callback);


}

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };

// get customer
module.exports.getUser = function (callback) {
    console.log('Controller get method called');
    User.find({}, callback);
}
// save customer
module.exports.saveUser = function (user, callback) {
    // console.log(obj.userName);
    console.log('Controller save method called');

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            const userObj = new User({
                'userName': user.userName,
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'company': user.company,
                'userRole': user.userRole,
                'contactNo': user.contactNo,
                'address': user.address,
                'NIC': user.NIC,
                'password': user.password,
                'commentID': user.commentID,
                'orderID': user.orderID
            });
            userObj.save(callback);
        });
    });


}
module.exports.updateUser = function (obj, callback) {
    console.log('Controller update method called');
    var query = { '_id': obj._id };
    var newData = {

        'userName': obj.userName,
        'firstName': obj.firstName,
        'lastName': obj.lastName,
        'email': obj.email,
        'company': obj.company,
        'userRole': obj.userRole,
        'contactNo': obj.contactNo,
        'addressNo': obj.addressNo,
        'NIC': obj.NIC,
        'password': obj.password
    };
    User.findOneAndUpdate(query, newData, { upsert: true }, callback);
}

module.exports.deleteUser = function (obj, callback) {
    console.log('Controller delete method called');

    User.findById(obj._id, function (err, doc) {
        if (err) {
        }
        doc.remove(callback); //Removes the document
    })
}

module.exports.getUserByName = function (obj, callback) {
    console.log('Controller getUserName method called');
    // Customer....(obj._id, function (err, doc) {
    //     if (err) {
    //     }
    //     doc.remove(callback); //Removes the document
    // })
}
