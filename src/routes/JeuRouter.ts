import { Router, Request, Response, NextFunction } from 'express';
import * as flash from 'node-twinkle';

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
      //Object.assign(Request.prototype, {flash(m:String): any {return flash.flash(m)}});
      (req as any).flash('Nouveau jeu pour ' + nom);  // error in ts: Property 'flash' does not exist on type 'Request'.
      res.status(201)
        .send({
          message: 'Success',
          status: res.status,
          nom: joueur.getNom()
        });
    } catch (error) {
      var code;
      if (error.message.indexOf("existe déjà")) {
        (req as any).flash(error.message);
        code = 400; // bad request }
      } else {
        code = 500; // internal server error
      }
      res.status(code).json({ error: error.toString() });

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
      (req as any).flash('Résultat pour ' + nom + ': ' + résultat.v1 + ' + ' + résultat.v2 + ' = ' + résultat.somme);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          résultat
        });

    } catch (error) {
      var code;
      if (error.message.indexOf("n'existe pas")) {
        (req as any).flash(error.message);
        code = 404; // not found }
      } else {
        code = 500; // internal server error
      }
      res.status(code).json({ error: error.toString() });

    }
  }

  /**
   * terminer 
   */
  public terminerJeu(req: Request, res: Response, next: NextFunction) {

    // obtenir nom de la requête
    let nom = req.params.nom;

    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      let résultat = this.jeu.terminerJeu(nom);
      (req as any).flash('Jeu terminé pour ' + nom);      
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          résultat
        });

    } catch (error) {
      var code;
      if (error.message.indexOf("n'existe pas")) {
        code = 404; // not found }
        (req as any).flash(error.message);
      } else {
        code = 500; // internal server error
      }
      res.status(code).json({ error: error.toString() });

    }
  }



  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this.router.get('/demarrerJeu/:nom', this.demarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this.router.get('/jouer/:nom', this.jouer.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this.router.get('/terminerJeu/:nom', this.terminerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }

}

// exporter its configured Express.Router
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
