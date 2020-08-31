import * as supertest from "supertest";
import 'jest-extended';
import app from '../src/App';

const request = supertest(app);

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('baseRoute', () => {

  it('should be html', async () => {
    const response = await request.get('/');
    
    expect(response.status).toBe(200);
  });

});

describe('GET /bo/gu/s/URL/', () => {
    it('Call responds with bad request when bogus URL is sent.', async () => {
        const response = await request.get('/bo/gu/s/URL/' + testNom2);

        expect(response.status).toBe(404);
    });
});
