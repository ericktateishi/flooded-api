const User = require('../../model/user')

/**
   * Get a user by a mongo filter.
   *
   * @param {*} filter
   */
module.exports = async (filter) => {
  return User.findOne(filter).exec()
}