const authToken = require('../../auth/token')

module.exports = (app) => {

  app.get(
    `/flood`,
    require('./list'),
  )

  app.post(
    `/flood`,
    authToken.auth,
    require('./post'),
  )

  app.get(
    `/flood/:id`,
    require('./get'),
  )
}