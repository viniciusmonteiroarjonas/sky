import { Router } from 'express'
const handle = require('express-async-handler')
const routes = new Router()

const authMiddleware = require('./app/middlewares/auth')
const controllers = require('./app/controllers')

/* Verifica se a API está disponivel */
routes.get('/', (req, res) => {
  res.status(200).send({ message: 'server is running!' })
})

/* Rota para cadastrar um usuário */
routes.post('/signup', handle(controllers.UserController.store))

/* Rota para autenticação baseada em JWT */
routes.post('/signin', handle(controllers.SessionController.store))

/* Lista usuários da aplicação */
routes.get('/users', authMiddleware, handle(controllers.UserController.index))

/* Retorna erro para rotas não mapeadas na aplicação */
routes.use(function (req, res, next) {
  if (!req.route) {
    return res.status(404).json({ message: 'Route not found!' })
  }
  next()
})

export default routes
