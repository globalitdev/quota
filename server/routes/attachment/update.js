module.exports = (req, res, next) => {
  const attachment = req.model('Attachment')
  attachment.findOneAndUpdate({
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
