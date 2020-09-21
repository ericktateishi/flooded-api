const authToken = require('../../auth/token')

module.exports = (app) => {

  app.post(
    `/react`,
    authToken.auth,
    require('./react'),
  )
}