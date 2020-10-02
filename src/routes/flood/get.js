const FloodService = require('../../service/flood')

module.exports = async (req, res) => {
  try {
    const response = await FloodService.get(req.params.id)
    
    res.status(200).send(response)

  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
  
}