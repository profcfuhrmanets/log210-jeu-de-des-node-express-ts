import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/JeuDeDes';
// TODO: rethink the name for this "router" function, since it's not really an Express router (no longer being "use()"ed inside Express)
export class JeuRouter {
  router: Router;
  jeu: JeuDeDes;  // contrôleur GRASP

  /**
   * Initialize the Router
   */
  constructor() {
    this.jeu = new JeuDeDes();  // init contrôleur GRASP
    this.router = Router();
    this.init();
  }

  /**
   * démarrer le jeu
   */
  public demarrerJeu(req: Request, res: Response, next: NextFunction) {
    let nom = req.params.nom;
    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      let joueur = this.jeu.demarrerJeu(nom);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          nom: joueur.getNom()
        });
    } catch (error) {
      let code = 500; // internal server error
      if (error.message.indexOf("existe déjà")) {
        code = 400; // bad request }
        res.status(code).json({ error: error.toString() });
      }

    }
  }

  /**
   * jouer une fois aux dés
   */
  public jouer(req: Request, res: Response, next: NextFunction) {

    // obtenir nom de la requête
    let nom = req.params.nom;

    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      let résultat = this.jeu.jouer(nom);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          résultat
        });

    } catch (error) {
      let code = 500; // internal server error
      if (error.message.indexOf("n'existe pas")) {
        code = 404; // not found }
        res.status(code).json({ error: error.toString() });
      }

    }
  }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
      this.router.get('/demarrerJeu/:nom', this.demarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
      this.router.get('/jouer/:nom', this.jouer.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    }

  }

  // exporter its configured Express.Router
  export const jeuRoutes = new JeuRouter();
  jeuRoutes.init();
