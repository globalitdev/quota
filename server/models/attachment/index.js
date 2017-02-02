var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Attachment = new Schema({
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  name: String,
  file: String,
  bucket: String
},{
  timestamps: true
})


Attachment.plugin(deepPopulate, {})
module.exports = mongoose.model('Attachment', Attachment)
