module.exports = (req, res, next)=> {
  const Tag = req.model('Tag')
  delete req.body._id

  const tag = new Tag(req.body.tag || req.body)
  tag.save().then(data=> {
      res.json(data)
    }).catch(err=> {
      res.status(500).json(err)
    })
}
