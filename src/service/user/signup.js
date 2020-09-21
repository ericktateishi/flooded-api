const UserRepository = require('../../repository/user')

/**
   * Create a user.
   *
   * @param {*} user
   */
module.exports = async (user) => {
  return UserRepository.signup(user)
}