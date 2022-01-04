import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/app';

const request = supertest(app);

const testNom1 = 'Jean-Marc';

describe('baseRoute', () => {

  it('devrait avoir un contenu HTML', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
  });

});

describe('/stats', () => {

  it('devrait avoir un contenu HTML', async () => {
    const response = await request.get('/stats');
    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
  });

});

describe('/signin (déjà connecté)', () => {

  it('devrait avoir un contenu HTML', async () => {
    const response = await request.get('/signin');
    expect(response.status).toBe(302);
    expect(response.text).toBe("Found. Redirecting to /");
  });

});

describe('/signout', () => {

  it('devrait avoir un contenu HTML', async () => {
    const response = await request.get('/signout');
    expect(response.status).toBe(302);
    expect(response.text).toBe("Found. Redirecting to /");
  });

});

describe('/signin (déconnecté)', () => {

  it('devrait avoir un contenu HTML', async () => {
    const response = await request.get('/signin');
    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
  });

});

describe('GET /bo/gu/s/URL/', () => {
  it(`devrait répondre avec une mauvaise demande lorsque l'URL est mauvais`, async () => {
    const response = await request.get('/bo/gu/s/URL/' + testNom1);
    expect(response.status).toBe(404);
  });
});
