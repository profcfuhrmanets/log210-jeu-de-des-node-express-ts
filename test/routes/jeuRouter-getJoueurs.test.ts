import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/App';
import { jeuRoutes } from "../../src/routes/jeuRouter";

const request = supertest(app);

const testNom1 = 'Jean-Marc-in-getJoueurs';
const testNom2 = 'Pierre-in-getJoueurs';

describe('contrôleur getJoueurs()', () => {


  it('devrait rendre 0 pour le nombre de Joueurs', async () => {
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it(`devrait rendre 1 pour le nombre de Joueurs après un nouveau joueur ${testNom1} a été ajouté.`, async () => {
    const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
    expect(response.statusCode).toBe(201);
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(1);
    expect(joueursArray[0].nom).toBe(testNom1);
  });

  it(`devrait rendre 2 pour le nombre de Joueurs après un nouveau joueur ${testNom2} a été ajouté.`, async () => {
    const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
    expect(response.statusCode).toBe(201);
    const joueursJSON = jeuRoutes.controleurJeu.joueurs;
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(2);
    expect(joueursArray[0].nom).toBe(testNom1);
    expect(joueursArray[1].nom).toBe(testNom2);
  });

});