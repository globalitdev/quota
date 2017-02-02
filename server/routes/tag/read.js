module.exports = (req, res, next) => {
  const tag = req.model('Tag')
  tag.findOne({_id: req.params.id})
    .then(data=> {
      res.json(data)
    })
}
