module.exports = (req, res, next)=> {
  const Task = req.model('Task')
  delete req.body._id

  Task.findOne({
      _id: req.params.id
    }).then(data=> {
      data.remove()
      res.status(200).json({status: 'removed'})
    }).catch(err=> {
      res.status(500).json(err)
    })
}
