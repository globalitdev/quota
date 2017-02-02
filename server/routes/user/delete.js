module.exports = (req, res, next)=> {
  const User = req.model('User')
  delete req.body._id

  User.findOneAndUpdate({
      _id: req.params.id
    },{
      blocked: true
    }).then(data=> {
      res.status(200).json({status: 'removed'})
    }).catch(err=> {
      res.status(500).json(err)
    })
}
