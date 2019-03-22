var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}]
},{collection:'Users'});

module.exports = userSchema;
