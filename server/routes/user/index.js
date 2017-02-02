
const index = (req, res, next) => {
  req.model('User').find()
    .then(data=> {
      res.json(data)
    }).catch(err=> {
      console.log(err)
    })
}


module.exports = require('express').Router()
  .get('/', index)
  .get('/:id', require('./read'))
  .delete('/:id', require('./delete'))
