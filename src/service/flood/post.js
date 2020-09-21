const FloodRepository = require('../../repository/flood')

/**
   * Create a flood post.
   *
   * @param {*} flood
   */
module.exports = async (flood) => {
  return FloodRepository.post(flood)
}