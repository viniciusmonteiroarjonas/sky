const express = require('express')
const app = express()
const request = require('supertest')
var mongoose = require('mongoose')
var mongoDB = 'mongodb://localhost:27017/test'
mongoose.connect(mongoDB)

describe('App test', () => {
  it('has a module', () => {
    expect(app).toBeDefined()
  })

  let server

  beforeAll(() => {
    server = app.listen(3001)
  })

  afterAll(done => {
    mongoose.connection.close()
    server.close(done)
  })
})
