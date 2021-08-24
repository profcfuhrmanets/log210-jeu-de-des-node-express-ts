import supertest from 'supertest';
import 'jest-extended';

import app from '../../src/App';
const request = supertest(app);

import { Joueur } from '../../src/core/Joueur';

describe('Joueur test', () => {

  it('joueur', () => {
    let joueur: Joueur = new Joueur('yvan');
    expect(joueur.nom).toEqual('yvan');
  });

  it('assainir nom', () => {
    let joueur: Joueur = new Joueur('yvan    ');
    expect(joueur.nom).toEqual('yvan');
  });

  it('lancer', () => {
    let joueur: Joueur = new Joueur('yvan    ');
    expect(joueur.lancers).toEqual(0);
    joueur.lancer();
    expect(joueur.lancers).toEqual(1);
  });

  it('lancerGagner', () => {
    let joueur: Joueur = new Joueur('yvan    ');
    expect(joueur.lancersGagnes).toEqual(0);
    joueur.gagner();
    expect(joueur.lancersGagnes).toEqual(1);
  });

  it('lancerGagner', () => {
    let joueur: Joueur = new Joueur('yvan    ');
    expect(joueur.toJSON()).toEqual({"lancers": 0, "lancersGagnes": 0, "nom": "yvan"});
  });

  
});
 