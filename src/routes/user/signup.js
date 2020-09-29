const UserService = require('../../service/user')

module.exports = async (req, res, next) => {
  try {
    const response = await UserService.signup({
      ...req.body,
      active: true
    })
    req.user = response
    next()

  } catch (error) {
    if (error && error.code === 11000) return res.sendStatus(406)
    
    return res.status(500).send(error)
  }
  
}