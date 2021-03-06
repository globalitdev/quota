var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Task = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  assignees: [{
    type: ObjectId,
    ref: 'User'
  }],
  status: {
    type: ObjectId,
    ref: 'Tag'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical']
  },
  department: {
    type: String,
    enum: [ 'development', 'frontend', 'design', 'qa', 'operation' ]
  },
  tags: [{
    type: ObjectId,
    ref: 'Tag'
  }],
  author: {
    type: ObjectId,
    ref: 'User'
  },
  attachments: [{
    type: ObjectId,
    ref: 'Attachment'
  }]
},{
  timestamps: true
})


Task.plugin(deepPopulate, {})
module.exports = mongoose.model('Task', Task)
