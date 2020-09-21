const UserService = require('../../service/user')

module.exports = async (req, res) => {
  try {
    const response = await UserService.profile(req.user_id)
    
    let user = response.toObject()
    delete user.password
    
    res.status(200).send(user)

  } catch (error) {
    
    return res.status(500).send(error)
  }
  
}