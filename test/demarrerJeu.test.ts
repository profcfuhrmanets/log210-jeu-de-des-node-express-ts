import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('GET /api/v1/jeu/demarrerJeu/:id', () => {

    it('responds with successful first call for player ' + testNom1, () => {
      return chai.request(app).get('/api/v1/jeu/demarrerJeu/' + testNom1)
        .then(response => {
          expect(response.status).to.equal(201);
          expect(response).to.be.json;
          expect(response.body.nom).to.equal(testNom1);
        });
    });
  
    it('duplicate call for player ' + testNom1 + ' responds with bad request', () => {
      return chai.request(app).get('/api/v1/jeu/demarrerJeu/' + testNom1)
        .then(
          response => {
            expect(response).to.have.status(400);
            expect(response).to.be.json;
            expect(response.body.error).to.include('existe déjà');
          }
        )
    });
  
  });