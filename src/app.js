const express = require('express')
const app = express()

//start env
require('dotenv').config()

//We like json, ok?
app.use(express.json())

//header config
const header = require('./config/header')
app.use(header)

//database config
const database = require('./config/database')
database.init().catch((error) => console.error(error))
app.use(database.middleware)

//api routes
app.use('/api', require('./routes/api'))

//start listening
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})