import { Router } from 'express';

const routes = new Router();

  /* health */
  routes.get('/', (req, res) => {
    res.status(200).send({ message: 'server is running!' });
  });

export default routes;
