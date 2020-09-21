const express = require('express')

const routes = express.Router()
require('./user')(routes)
require('./flood')(routes)
require('./reaction')(routes)

module.exports = routes