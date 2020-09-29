const Flood = require('../../model/flood')

/**
   * Create a flood post.
   *
   * @param {*} flood
   */
module.exports = async (flood) => {
  const result = await Flood.create(flood)
  return result.populate('user').execPopulate()
}