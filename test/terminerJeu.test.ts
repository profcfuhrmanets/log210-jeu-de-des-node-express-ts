import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('GET /api/v1/jeu/terminerJeu/:id', () => {
    it('responds with successful call for player ' + testNom1, () => {
      return chai.request(app).get('/api/v1/jeu/terminerJeu/' + testNom1)
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response).to.be.json;
          expect(response.body.résultat.nom).to.equal(testNom1);
        });
    });
  
    it('Call responds with bad request when player does not exist ' + testNom1, () => {
      return chai.request(app).get('/api/v1/jeu/terminerJeu/' + testNom1)
        .then(
          response => {
            expect(response).to.have.status(404);
            expect(response).to.be.json;
            expect(response.body.error).to.include("n'existe pas");
            expect(response.body.error).to.include(testNom1);
          }
        )
    });
  
  
  });