import jwt from 'express-jwt'
import body from 'body-parser'
import morgan from 'morgan'

import routes from './routes'
import errors from './errors'
import models from '../models'

export default {
  before(app) {
    const config = app.get('config')
    // register models
    app.use(models(config.database))

    // parse body
    app.use(body.urlencoded({ extended: false }))
    app.use(body.json())

    app.use(routes)

    // authenticate
    //app.use(jwt(config.auth))





  },
  after(app) {
    const config = app.get('config')

    // logging
    app.use(morgan(config.logging))

    // errors
    app.use(errors)
  }

}
