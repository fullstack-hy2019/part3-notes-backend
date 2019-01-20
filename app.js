const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const notesRouter = require('./controllers/notes')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

console.log('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(middleware.logger)

app.use('/api/notes', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app