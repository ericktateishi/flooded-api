const FloodRepository = require('../../repository/flood')
const ReactionService = require('../reaction')

/**
   * Check a post.
   *
   * @param {string} _id
   */
module.exports = async (_id) => {
  const [flood, reactions] = await Promise.all([
    FloodRepository.get({ _id }),
    ReactionService.list(_id),
  ])

  return {
    ...(flood.toObject()),
    reactions
  }
}