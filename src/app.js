import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import databaseConfig from './config/database'
const validate = require('express-validation')
const Youch = require('youch')

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class App {
  constructor () {
    this.server = express()
    this.middlewares()
    this.databases()
    this.routes()
    this.exception()
  }

  middlewares () {
    this.server.use(express.json())
  }

  databases () {
    mongoose.connect(databaseConfig.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
  }

  routes () {
    this.server.use(routes)
  }

  exception () {
    this.server.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
      }

      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)

        return res.json(await youch.toJSON())
      }

      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

export default new App().server
