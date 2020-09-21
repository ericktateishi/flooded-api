const Reaction = require('../../model/reaction')

/**
   * Create a reaction.
   *
   * @param {*} reaction
   */
module.exports = async (reaction) => {
  return Reaction.create(reaction)
}