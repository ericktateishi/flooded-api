const authToken = require('../../auth/token')

module.exports = (app) => {

  app.get(
    `/list`,
    require('./list'),
  )

  app.post(
    `/post`,
    authToken.auth,
    require('./post'),
  )

  app.get(
    `/flood/:id`,
    require('./get'),
  )
}