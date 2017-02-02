var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Tag = new Schema({
  // Fill in schema here
  category: {
    type: String,
    enum: ['other', 'project', 'type','status']
  },
  title: {
    type: String,
    required: true
  },
  color: String
},{
  timestamps: true
})


Tag.plugin(deepPopulate, {})
module.exports = mongoose.model('Tag', Tag)
