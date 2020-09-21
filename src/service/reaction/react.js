const ReactionRepository = require('../../repository/reaction')

/**
   * Create a reaction.
   *
   * @param {*} reaction
   */
module.exports = async (reaction) => {
  const eReaction = await ReactionRepository.get({
    user: reaction.user,
    flood: reaction.flood,
  })

  if (!eReaction) return ReactionRepository.post(reaction)

  if (eReaction.type === reaction.type) {
    await eReaction.deleteOne()
    return null
  }

  eReaction.type = (eReaction.type === "approved" ? "approved" : "disapproved")
  
  return eReaction.updateOne(reaction).exec()
}