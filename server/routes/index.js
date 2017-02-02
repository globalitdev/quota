export default app => {
  /* +ROUTES */
  app.use('/user', require('./user'))
  app.use('/task', require('./task'))
  app.use('/tag', require('./tag'))
  app.use('/attachment', require('./attachment'))
  /* -ROUTES */
}
