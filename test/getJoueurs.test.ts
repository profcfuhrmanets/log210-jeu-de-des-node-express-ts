import * as supertest from "supertest";
import 'jest-extended';
import app from '../src/App';

const request = supertest(app);

import { jeuRoutes } from "../src/routes/JeuRouter";

let testNom1 = 'Jean-Marc-in-getJoueurs';
let testNom2 = 'Pierre-in-getJoueurs';

describe('contrôleur getJoueurs()', () => {


  it('Nombre de Joueurs est 0', async () => {
    const joueursJSON = jeuRoutes.jeu.getJoueurs();
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(0);
  });

  it('Nombre de Joueurs est 1 et le nouveau joueur ' + testNom1 + 'a été ajouté.', async () => {
    const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
    const joueursJSON = jeuRoutes.jeu.getJoueurs();
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(1);
    expect(joueursArray[0].nom).toBe(testNom1);
  });

  it('Nombre de Joueurs est 2 et les joueurs sont dans la liste', async () => {
    const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom2 });
    const joueursJSON = jeuRoutes.jeu.getJoueurs();
    const joueursArray = JSON.parse(joueursJSON);
    expect(joueursArray.length).toBe(2);
    expect(joueursArray[0].nom).toBe(testNom1);
    expect(joueursArray[1].nom).toBe(testNom2);
  });

});