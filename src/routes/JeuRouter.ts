import { Router, Request, Response, NextFunction } from 'express';
import { JeuDeDes } from '../core/JeuDeDes';
import { InvalidParameterError } from '../core/errors/InvalidParameterError';

// TODO: rethink the name for this "router" function, since it's not really an Express router (no longer being "use()"ed inside Express)
export class JeuRouter {
  private _router: Router;
  private _jeu: JeuDeDes;  // contrôleur GRASP

  get jeu() {
    return this._jeu;
  }

  get router() {
    return this._router;
  }

  /**
   * Initialiser le router
   */
  constructor() {
    this._jeu = new JeuDeDes();  // un routeur pointe vers au moins un contrôleur GRASP
    this._router = Router();
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
      console.log(error.message);
      this._errorCode500(error, req, res);
    }
  }

  private _demarrerJeu(nom: any, req, res: Response<any>) {
    if (nom === undefined) {
      throw new InvalidParameterError('Le paramètre nom est absent');
    }

    // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
    let joueur = this._jeu.demarrerJeu(nom);
    let joueurObj = JSON.parse(joueur);
    req.flash('info', `Nouveau jeu pour ${nom}`);
    res.status(201)
      .send({
        message: 'Success',
        status: res.status,
        joueur: joueurObj
      });
  }

  /**
   * jouer une fois aux dés
   */
  public jouer(req: Request, res: Response, next: NextFunction) {
    try {
      this._jouer(req, res);
    } catch (error) {
      console.log(error.message);
      this._errorCode500(error, req, res);
    }
  }

  private _errorCode500(error: any, req, res: Response<any>) {
    var code = 500;
    if (error.code) {
      req.flash('error', error.message);
      code = error.code;
    }
    res.status(code).json({ error: error.toString() });
  }

  private _jouer(req, res: Response<any>) {
    let nom = req.params.nom;
    let resultat = this._jeu.jouer(nom);
    let resultatObj = JSON.parse(resultat);
    req.flash('info',
      `Resultat pour ${nom}: ${resultatObj.v1} + ${resultatObj.v2} = ${resultatObj.somme}`);
    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        resultat
      });
  }

  /**
   * terminer
   */
  public terminerJeu(req, res: Response, next: NextFunction) {

    // obtenir nom de la requête
    let nom = req.params.nom;

    try {
      // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
      let resultat = this._jeu.terminerJeu(nom);
      req.flash('info', `Jeu terminé pour ${nom}`);
      res.status(200)
        .send({
          message: 'Success',
          status: res.status,
          resultat
        });

    } catch (error) {
      console.log(error.message);
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
