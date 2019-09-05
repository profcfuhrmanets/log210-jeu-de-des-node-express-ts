import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be html', async () => {
    const res = await chai.request(app).get('/');
    expect(res).to.be.html;
  });

  // it('should have the message in body', async () => {
  //   const res = await chai.request(app).get('/');
  //   expect(res.text).to.eql('<html><head><title>Hey</title></head><body><h1>Bonjour monde!</h1></body></html>');
  // });

});
