const User = require('../../model/user')

/**
   * Create a user.
   *
   * @param {*} user
   */
module.exports = async (user) => {
  return User.create(user)
}