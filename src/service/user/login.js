const UserRepository = require('../../repository/user')

/**
   * Check a user for login.
   *
   * @param {string} email
   * @param {string} password
   */
module.exports = async (email, password) => {
  const result = await UserRepository.get({ email })
  if (!result || !result || !result.id) return { status: 404 }
  
  const user = result
  const isAuthed = await user.comparePassword(password)
  if (!isAuthed) return { status: 401 }

  return { status: 200, user }
}