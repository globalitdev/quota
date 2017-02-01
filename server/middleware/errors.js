export default (error, req, res, next) => {
  const production = process.env.NODE_ENV === 'production'
  const status = error.status || 500
  const title = `${error.message} (${status})`

  res.format({
    json() {
      res.status(status).send({
        code: error.code,
        message: error.message,
        stack: production ? void 0 : error.stack
      })
    },
    html() {
      res.status(status)
      res.write(`<html><head><title>${title}</title></head><body>`)
      res.write(`<h1>${title}</h1>`)
      if(!production) {
        res.write(`<pre>${error.stack}</pre>`)
      }
      res.end('</body></html>')
    }
  })
}
