module.exports = (req, res, next)=> {
  const Tag = req.model('Tag')
  delete req.body._id

  Tag.findOne({
      _id: req.params.id
    }).then(data=> {
      data.remove()
      res.status(200).json({status: 'removed'})
    }).catch(err=> {
      res.status(500).json(err)
    })
}
