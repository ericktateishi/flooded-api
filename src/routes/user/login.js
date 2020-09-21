const UserService = require('../../service/user')

module.exports = async (req, res, next) => {
  try {
    const {status, user} = await UserService.login(req.body.email, req.body.password)

    if (status !== 200) return res.sendStatus(status)
    req.user = user
    next()

  } catch (error) {

    return res.status(500).send(error)
  }
  
}