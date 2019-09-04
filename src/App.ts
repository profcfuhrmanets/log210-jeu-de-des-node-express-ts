import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { jeuRoutes } from './routes/JeuRouter';
//import jeuRoutes from './routes/JeuRouter';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.express.set('view engine', 'pug');
    console.log('Setting static to: "' + __dirname + '/public' + '"');
    this.express.use(express.static(__dirname + '/public')); // https://expressjs.com/en/starter/static-files.html

  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This function will change when we start to add more
     * API endpoints */
    let router = express.Router();

    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.render('index', { title: 'Jeu de dés', flashedMessages: [], joueurs:[] });
    });

    this.express.use('/', router);  // routage de base

    this.express.use('/api/v1/jeu', jeuRoutes.router);  // tous les URI pour le scénario jeu (DSS) commencent ainsi
  }

}

export default new App().express;
