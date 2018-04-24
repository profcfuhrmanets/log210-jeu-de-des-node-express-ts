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
      res.json({
        message: 'Bonjour monde!'
      });
    });

    // faire le lien entre un chemin et un contrôleur
    router.get('/api/v1/demarrerJeu/:nom', jeuRoutes.demarrerJeu.bind(jeuRoutes));  // Pour bind, voir https://stackoverflow.com/a/15605064/1168342
    router.get('/api/v1/jouer/:nom', jeuRoutes.jouer.bind(jeuRoutes));

    this.express.use('/', router);

// //    this.express.use(['/api/v1/demarrerJeu','/api/v1/jouer'], JeuRouter);  // tous les URI pour le routeur
//     this.express.use('/api/v1/jeu', JeuRouter);  // tous les URI pour le routeur
  }

}

export default new App().express;
