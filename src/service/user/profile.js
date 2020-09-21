const UserRepository = require('../../repository/user')

/**
   * Check a user for login.
   *
   * @param {string} _id
   */
module.exports = async (_id) => {
  const result = await UserRepository.get({ _id })
  if (!result || !result || !result.id) return null
  
  return result
}