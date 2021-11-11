import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/jeuDeDes';
import { InvalidParameterError } from '../core/errors/invalidParameterError';

export class JeuRouter {
  private _router: Router;
  private _controleurJeu: JeuDeDes;  // contrôleur GRASP

  get controleurJeu() {
    return this._controleurJeu;
  }

  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._controleurJeu = new JeuDeDes();  // un routeur pointe vers au moins un contrôleur GRASP
    this._router = Router();
    this.init();
  }

  /**
   * démarrer le jeu
   */
  public demarrerJeu(req: Request, res: Response, next: NextFunction) {
    const nom = req.body.nom;

    try {
      // POST ne garantit pas que tous les paramètres de l'opération système sont présents
      if (!nom) {
        throw new InvalidParameterError('Le paramètre nom est absent');
      }

      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      const joueur = this._controleurJeu.demarrerJeu(nom);
      const joueurObj = JSON.parse(joueur);
      req.flash('info', `Nouveau jeu pour ${nom}`);
      res.status(201)
        .send({
          message: 'Success',
          status: res.status,
          joueur: joueurObj
        });
    } catch (error) {
      // console.error(error);
      this._errorCode500(error, req, res);
    }
  }

  /**
   * jouer une fois aux dés
   */
  public jouer(req: Request, res: Response, next: NextFunction) {
    const nom = req.params.nom;
    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      const resultat = this._controleurJeu.jouer(nom);
      const resultatObj = JSON.parse(resultat);
      // flash un message selon le résultat
      const key = resultatObj.somme == 7 ? 'win' : 'info';
      req.flash(key,
        `Résultat pour ${nom}: ${resultatObj.v1} + ${resultatObj.v2} = ${resultatObj.somme}`);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          resultat
        });
    } catch (error) {
      // console.error(error);
      this._errorCode500(error, req, res);
    }
  }

  private _errorCode500(error: any, req: Request, res: Response<any, Record<string, any>>) {
    req.flash('error', error.message);
    res.status(error.code).json({ error: error.toString() });
  }


  /**
   * terminer
   */
  public terminerJeu(req: Request, res: Response, next: NextFunction) {

    // obtenir nom de la requête
    const nom = req.params.nom;

    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      const resultat = this._controleurJeu.terminerJeu(nom);
      req.flash('info', `Jeu terminé pour ${nom}`);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          resultat
        });
    } catch (error) {
      // console.error(error);
      this._errorCode500(error, req, res);
    }
  }

  /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
  init() {
    this._router.post('/demarrerJeu', this.demarrerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this._router.get('/jouer/:nom', this.jouer.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
    this._router.get('/terminerJeu/:nom', this.terminerJeu.bind(this)); // pour .bind voir https://stackoverflow.com/a/15605064/1168342
  }

}

// exporter its configured Express.Router
export const jeuRoutes = new JeuRouter();
jeuRoutes.init();
