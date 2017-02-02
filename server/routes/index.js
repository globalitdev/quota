export default app => {
  /* +ROUTES */
  app.use('/user', require('./user'))
  /* -ROUTES */
}
