module.exports = (req, res, next) => {
  const tag = req.model('Tag')
  tag.findOneAndUpdate({
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
