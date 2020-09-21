const ReactionService = require('../../service/reaction')

module.exports = async (req, res) => {
  try {
    const response = await ReactionService.react({
      ...req.body,
      user: req.user_id
    })
    res.status(200).send(response)

  } catch (error) {
    
    return res.status(500).send(error)
  }
  
}