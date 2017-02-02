require('dotenv').config()
var args = process.argv.slice(2)
var babelify = require('babelify')
var budo = require('budo')
budo('./client/index.js',{
  serve: 'application.js',
  dir: __dirname + '/public',
  stream: process.stdout
})
