const FloodService = require('../../service/flood')

module.exports = async (req, res) => {
  try {
    const response = await FloodService.list(req.query.page, req.query.search)
    
    res.status(200).send(response)

  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
  
}