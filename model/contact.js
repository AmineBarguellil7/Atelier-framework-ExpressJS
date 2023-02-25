var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contact = new Schema({
    name : String,
    phone : String,
    email : String
});

module.exports = mongoose.model('contacts', Contact);