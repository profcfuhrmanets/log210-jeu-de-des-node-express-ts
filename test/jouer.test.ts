import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('GET /api/v1/jeu/jouer/:id', () => {

    // plusieurs appels à jouer (pour valider la somme aléatoire)
    for (let i = 0; i < 20; i++) {
      it('responds with successful call for initialized player ' + testNom1, () => {
        return chai.request(app).get('/api/v1/jeu/jouer/' + testNom1)
          .then(response => {
            expect(response.status).to.equal(200);
            expect(response).to.be.json;
            expect(response.body.résultat.lancers).to.equal(i + 1);
            expect(response.body.résultat.v1).to.be.above(0).and.below(7);
            expect(response.body.résultat.v2).to.be.above(0).and.below(7);
            expect(response.body.résultat.somme).to.equal(response.body.résultat.v1 + response.body.résultat.v2);
            expect(response.body.résultat.nom).to.equal(testNom1);
          });
      });
    }
  
    it('Call responds with bad request when player is not intialized ' + testNom2, () => {
      return chai.request(app).get('/api/v1/jeu/jouer/' + testNom2)
        .then(
          response => {
            expect(response).to.have.status(404);
            expect(response).to.be.json;
            expect(response.body.error).to.include("n'existe pas");
            expect(response.body.error).to.include(testNom2);
          }
        )
    });
  
  });