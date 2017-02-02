module.exports = (req, res, next)=> {
  const Task = req.model('Task')
  delete req.body._id

  const task = new Task(req.body.task || req.body)
  task.save().then(data=> {
      res.json(data)
    }).catch(err=> {
      res.status(500).json(err)
    })
}
