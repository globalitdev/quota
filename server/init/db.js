var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/quota')
var connection = mongoose.connection

connection.on('error', function onConnectionError(error) {
  console.error('db error:', error.stack)
});

connection.once('open', function (callback) {
  console.error('db connected')
});

module.exports = connection;
