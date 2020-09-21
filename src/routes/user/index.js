const authToken = require('../../auth/token')

module.exports = (app) => {

  app.post(
    `/signup`,
    require('./signup')
  )

  app.post(
    `/login`,
    require('./login'),
    authToken.generate
  )

  app.get(
    `/profile`,
    authToken.auth,
    require('./profile'),
  )
}