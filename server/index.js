import spdy from 'spdy'
import http from 'http'

import express from 'express'
import Sockets from 'socket.io'

import config from './config'
import middleware from './middleware'
import routes from './routes'


const app = express()
const server = config.ssl
  ? spdy.createServer(config.ssl, app)
  : http.createServer(app)

const sockets = Sockets(server)

app.configure = cb => cb(app) || app

app.set('config', config)
app.set('sockets', sockets)

app.configure(middleware.before)
app.configure(routes)
app.configure(middleware.after)

server.listen(config.port, error => {
  if (error) {
    console.error(error)
  } else {
    console.log(`Listening on port: ${config.port}.`)
  }
})
