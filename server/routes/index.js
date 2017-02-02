export default app => {
  /* +ROUTES */
  app.use('/user', require('./user'))
  app.use('/task', require('./task'))
  /* -ROUTES */
}
