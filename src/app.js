import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import databaseConfig from './config/database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.databases();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  databases() {
    mongoose.connect(databaseConfig.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
