import { Router } from 'express'
const handle = require('express-async-handler')
const routes = new Router()

const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')

/* health */
routes.get('/', (req, res) => {
  res.status(200).send({ message: 'server is running!' })
})
routes.use(function (req, res, next) {
  if (!req.route) {
    return res.status(404).json({ messagem: 'Não existe essa rota na aplicação.' })
  }
  next()
})
routes.post('/signup', handle(controllers.UserController.store))
// Autenticação
routes.post('/signin', handle(controllers.SessionController.store))

// Middleware de autenticação
routes.use(authMiddleware)
routes.get('/users', handle(controllers.UserController.index))

export default routes
