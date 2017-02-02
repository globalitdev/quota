
const index = (req, res, next) => {
  req.model('Tag').find(req.body)
    .then(data=> {
      res.json(data)
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
