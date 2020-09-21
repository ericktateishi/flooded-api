const Reaction = require('../../model/reaction')

/**
   * Get a reaction.
   *
   * @param {*} filter
   */
module.exports = async (filter) => {
  return Reaction.find(filter).exec()
}