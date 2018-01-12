var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String

    },
    userRole: {
        type: Number,
        default: 1
    },
    contactNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    commentID: {
        type: String,

    },
    profileImage:{
        type: String,
        default:'46d5bfa791d72d8211e717dbc0aff5d2'
    },
    orderID: {
        type: String,
    },

    create_date: {
        type: Date,
        default: Date.now
    }
});
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;