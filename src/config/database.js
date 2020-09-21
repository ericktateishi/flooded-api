const mongoose = require('mongoose')

exports.init = async () => {
  if (mongoose.connection.readyState) return mongoose

  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Database connected'))
    .then(() => mongoose)
}

exports.middleware = async (_req, res, next) => {
  try {
    await this.init()

  } catch (error) {
    console.error(error)
    return res.sendStatus(500)
  }
  return next()
}