const Flood = require('../../model/flood')

/**
   * Get a flood by a mongo filter.
   *
   * @param {*} filter
   */
module.exports = async (filter) => {
  return Flood.findOne(filter)
    .populate('user')
    .populate('user', '-password')  
    .exec()
}