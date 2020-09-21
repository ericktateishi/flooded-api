const FloodRepository = require('../../repository/flood')
const ReactionService = require('../reaction')

/**
   * Check list posts.
   *
   * @param {number} page
   * * @param {string} search
   */
module.exports = async (page, search) => {
  const per_page = 10

  const result = await FloodRepository
    .find(
      (search ?
        { 
          location: {
            $regex: (search || ""),
            $options: 'i', 
          } 
        } : 
        {}
      ), 
      (page ?
        (per_page*page) :
        0
      )
      , per_page)

  const reaction = await Promise.all(
    result.map(async flood => {
      return {
        ...flood.toObject(),
        reactions: await ReactionService.list(flood.id)
      }
    }
  ))

  return reaction
}