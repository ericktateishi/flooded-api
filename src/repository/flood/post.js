const Flood = require('../../model/flood')

/**
   * Create a flood post.
   *
   * @param {*} flood
   */
module.exports = async (flood) => {
  return Flood.create(flood)
}