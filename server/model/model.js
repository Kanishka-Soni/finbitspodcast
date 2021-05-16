const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
        unique: true
    },
    content : {
        type: String,
        required: true
    },
    imagelink : {
        type: String,
        required: true
    },
    url : String,
    type : String,
    length : String,
    date : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;