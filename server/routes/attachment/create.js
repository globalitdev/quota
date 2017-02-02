module.exports = (req, res, next)=> {
  const Attachment = req.model('Attachment')
  delete req.body._id

  const attachment = new Attachment(req.body)
  attachment.save().then(data=> {
      res.json(data)
    }).catch(err=> {
      res.status(500).json(err)
    })
}
