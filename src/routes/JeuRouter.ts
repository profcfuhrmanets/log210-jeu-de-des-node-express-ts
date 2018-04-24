import {Router, Request, Response, NextFunction} from 'express';
import { JeuDeDes } from '../core/JeuDeDes';

export class JeuRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * jouer une fois
   */
  public jouer(req: Request, res: Response, next: NextFunction) {
//    let query = parseInt(req.params.id);
//    let hero = Heroes.find(hero => hero.id === query);
  // call the system operation (in the GRASP controller)
  let résultat = JeuDeDes.jouer();  // correspond à l'opération système dans le DSS

  res.status(200)
    .send({
      message: 'Success',
      status: res.status,
      résultat
    });

  }

  //   if (hero) {
  //     res.status(200)
  //       .send({
  //         message: 'Success',
  //         status: res.status,
  //         hero
  //       });
  //   }
  //   else {
  //     res.status(404)
  //       .send({
  //         message: 'No hero found with the given id.',
  //         status: res.status
  //       });
  //   }
  // }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.jouer);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const jeuRoutes = new JeuRouter();
jeuRoutes.init();

export default jeuRoutes.router;
