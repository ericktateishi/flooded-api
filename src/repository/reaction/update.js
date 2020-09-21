const Reaction = require('../../model/reaction')

/**
   * Update a reaction.
   *
   * @param {*} reaction
   */
module.exports = async (reaction) => {
  return Reaction.updateOne(reaction).exec()
}