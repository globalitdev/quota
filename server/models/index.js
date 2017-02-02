 /* +MODELS */
 models.User = require('./user')
 models.Task = require('./task')
 /* -MODELS */

function models(name) {
  return models[name] || (models[name] = function Model() {})
}

export default config => {
  return (req, res, next) => {
    req.model = models
    next()
  }
}
