import routes from 'pathfinder-ui'

export default [
  function read(req, res, next) {
    routes(req.app)
    next()
  },
  routes.router
]
