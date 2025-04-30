let expressObj = require('express')
let router = expressObj.Router({})

router.get('/CreateUser', (req, res) => {
  const user = {
    name: req.query['name'],
    session: req.query['session'],
    address: req.query['address'],
    age: req.query['age'],
  }

  res.json(user)
})

module.exports = router
