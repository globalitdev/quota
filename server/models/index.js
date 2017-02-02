 /* +MODELS */
 models.User = require('./user')
 models.Task = require('./task')
 models.Tag = require('./tag')
 models.Attachment = require('./attachment')
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
