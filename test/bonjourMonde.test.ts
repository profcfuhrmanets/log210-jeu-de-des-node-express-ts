import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('baseRoute', () => {

  it('should be html', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.be.html;
  });

});

describe('GET /bo/gu/s/URL/', () => {

    it('Call responds with bad request when bogus URL is sent.', () => {
      return chai.request(app).get('/bo/gu/s/URL/' + testNom2)
        .then(
          response => {
            expect(response.status).to.equal(404);
          }
        )
    });
  });
