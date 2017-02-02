module.exports = (req, res, next) => {
  const task = req.model('Task')
  task.findOne({_id: req.params.id})
    .then(data=> {
      res.json(data)
    })
}
