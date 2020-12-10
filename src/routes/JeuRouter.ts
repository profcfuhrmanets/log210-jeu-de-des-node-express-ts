import { Router, Request, Response, NextFunction } from 'express';
import * as flash from 'node-twinkle';

import { JeuDeDes } from '../core/JeuDeDes';
import { InvalidParameterError } from '../core/errors/InvalidParameterError';

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
    let nom = req.body.nom;
    try {
      // POST ne garantit pas que tous les paramètres de l'opération système sont présents
      this._demarrerJeu(nom, req, res);
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  private _demarrerJeu(nom: any, req, res: Response<any>) {
    if (nom === undefined) {
      throw new InvalidParameterError('Le paramètre nom est absent');
    }

    // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
    let joueur = this.jeu.demarrerJeu(nom);

    (req as any).flash('Nouveau jeu pour ' + nom);
    res.status(201)
      .send({
        message: 'Success',
        status: res.status,
        nom: joueur.nom
      });
  }

  /**
   * jouer une fois aux dés
   */
  public jouer(req: Request, res: Response, next: NextFunction) {
    try {
      this._jouer(req, res);
    } catch (error) {
      this._errorCode500(error, req, res);
    }
  }

  private _errorCode500(error: any, req, res: Response<any>) {
    var code = 500;
    if (error.code) {
      (req as any).flash(error.message);
      code = error.code;
    }
    res.status(code).json({ error: error.toString() });
  }

  private _jouer(req, res: Response<any>) {
    let nom = req.params.nom;
    let résultat = this.jeu.jouer(nom);
    (req as any).flash('Résultat pour ' + nom + ': ' + résultat.v1 + ' + ' + résultat.v2 + ' = ' + résultat.somme);
    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        résultat
      });
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
      this._errorCode500(error, req, res);

    }
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init()
  {
    this.router.post('/demarrerJeu', this.demarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this.router.get('/jouer/:nom', this.jouer.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this.router.get('/terminerJeu/:nom', this.terminerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }

}

// exporter its configured Express.Router
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
