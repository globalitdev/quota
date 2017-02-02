var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Task = new Schema({
  // Fill in schema here
},{
  timestamps: true
})


Task.plugin(deepPopulate, {})
module.exports = mongoose.model('Task', Task)
