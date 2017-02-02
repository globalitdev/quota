
const index = (req, res, next) => {
  req.model('Task').find()
    .then(data=> {
      res.json({tasks: data})
    }).catch(err=> {
      console.log(err)
    })
}


module.exports = require('express').Router()
  .get('/', index)
  .get('/:id', require('./read'))
  .post('/', require('./create'))
  .put('/:id', require('./update'))
  .delete('/:id', require('./delete'))
