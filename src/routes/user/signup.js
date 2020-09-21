const UserService = require('../../service/user')

module.exports = async (req, res) => {
  try {
    const response = await UserService.signup({
      ...req.body,
      active: true
    })
    res.status(200).send(response)

  } catch (error) {
    if (error && error.code === 11000) return res.sendStatus(406)
    
    return res.status(500).send(error)
  }
  
}