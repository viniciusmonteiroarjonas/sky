import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import databaseConfig from './config/database'

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class App {
  constructor () {
    this.server = express()
    this.middlewares()
    this.databases()
    this.routes()
  }

  middlewares () {
    this.server.use(express.json())
  }

  databases () {
    mongoose.connect('mongodb://localhost:27017/sky', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }

  routes () {
    this.server.use(routes)
  }
}

export default new App().server
