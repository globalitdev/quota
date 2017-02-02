module.exports = (req, res, next)=> {
  const Attachment = req.model('Attachment')
  delete req.body._id

  Attachment.findOne({
      _id: req.params.id
    }).then(data=> {
      data.remove()
      res.status(200).json({status: 'removed'})
    }).catch(err=> {
      res.status(500).json(err)
    })
}
