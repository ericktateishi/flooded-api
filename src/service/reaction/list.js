const ReactionRepository = require('../../repository/reaction')

/**
   * Check list reactions for a post.
   *
   * * @param {string} flood
   */
module.exports = async (flood) => {
  const result = await ReactionRepository
    .find({ flood })
  
  return result
}