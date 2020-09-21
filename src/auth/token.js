const jwt = require('jsonwebtoken')

exports.auth = (req, res, next) => {
  if (!req || !req.header || !req.header('Auth-User-Token')) return res.sendStatus(401)

  try {
    const decoded = jwt.verify(req.header('Auth-User-Token'), process.env.APP_SECRET)
    if (!decoded || !decoded.user) return res.sendStatus(401)

    req.user_id = decoded.user
    next()

  } catch(err) {
    res.sendStatus(401)
  }
}

exports.generate = (req, res) => {
  if (!req || !req.user || !req.user.id) return res.sendStatus(401)

  res.header('Auth-User-Token', jwt.sign({ user: req.user.id }, process.env.APP_SECRET))
  res.sendStatus(200)
}