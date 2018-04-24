import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/JeuDeDes';
// TODO: rethink the name for this "router" function, since it's not really an Express router (no longer being "use()"ed inside Express)
export class JeuRouter {
//  router: Router;
  jeu: JeuDeDes;  // contrôleur GRASP

  /**
   * Initialize the Router
   */
  constructor() {
    this.jeu = new JeuDeDes();  // init contrôleur GRASP
  //  this.router = Router();
    this.init();
  }

  /**
   * S'identifier
   */
  public demarrerJeu(req: Request, res: Response, next: NextFunction) {
    let nom = req.params.nom;
    console.log(nom);
    let joueur = this.jeu.demarrerJeu(nom);
    console.log(joueur);

    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        nom: joueur.getNom()
      });

  }

  /**
   * jouer une fois
   */
  public jouer(req: Request, res: Response, next: NextFunction) {

    // obtenir nom de la requête
    let nom = req.params.nom;

    // Invoquer l'opération système dans le contrôleur GRASP
    let résultat = this.jeu.jouer(nom);  // correspond à l'opération système dans le DSS

    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        résultat
      });

  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    // this.router.get('/:nom', this.demarrerJeu.bind(this));  // https://stackoverflow.com/a/15605064/1168342
    // this.router.get('/:nom/jouer', this.jouer.bind(this));
  }

}

// exporter its configured Express.Router
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
