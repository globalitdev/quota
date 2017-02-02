var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var User = new Schema({
  name: {
    type: String,
    required: true
  },
  blocked: {
    type: Boolean,
    default: false
  },
  email: String
},{
  timestamps: true
})


User.plugin(deepPopulate, {})
module.exports = mongoose.model('User', User)
