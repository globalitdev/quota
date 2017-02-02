module.exports = (req, res, next) => {
  const user = req.model('User')
  user.findOne({_id: req.params.id})
    .then(data=> {
      res.json(data)
    })
}
