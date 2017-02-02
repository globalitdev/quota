module.exports = (req, res, next) => {
  const attachment = req.model('Attachment')
  attachment.findOne({_id: req.params.id})
    .then(data=> {
      res.json(data)
    })
}
