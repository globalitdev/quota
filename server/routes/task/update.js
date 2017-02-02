module.exports = (req, res, next) => {
  const task = req.model('Task')
  task.findOneAndUpdate({
      _id: req.params.id
    }, req.body, {
      new: true
    })
    .then(data=> {
      res.json(data)
    }).catch(err=> {
      res.status(500).json(err)
    })
}
