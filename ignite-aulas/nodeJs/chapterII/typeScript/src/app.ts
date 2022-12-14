import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import specificationsRoutes from './routes/specifications.routes';
import router from './routes';

class App {
  public app;

  public server;

  constructor() {
    this.app = express();
    this.middlewares();
    this.server = new http.Server(this.app);
    this.routes();
  }

  private middlewares(): void {
    this.app.set('port', process.env.PORT);
    this.app.use(cors({ origin: '*' }));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(router);
    this.app.use('/specifications', specificationsRoutes);
  }
}

export default new App().server;
