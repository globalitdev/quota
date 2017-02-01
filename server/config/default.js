module.exports = {
  port: process.env.PORT || 8080,
  auth: {
    secret: process.env.AUTH_SECRET
  }
}
