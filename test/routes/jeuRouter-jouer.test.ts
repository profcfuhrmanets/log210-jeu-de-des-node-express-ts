// import 'jest-extended';
import axios from 'axios';
import app from '../../src/app';
import http from 'http';

// const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

let server: http.Server;
const port = 3000;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(port, () => {
    // initialiser le jeu avec un joueur
    axios.post(`http://localhost:${port}/api/v1/jeu/demarrerJeu`, { nom: testNom1 })
      .then(() => done())
      .catch((err) => console.error(err));
  });
});

afterAll((done) => {
  server.close((err) => {
    if (err) console.error(err);
    done();
  });
});

describe('GET /api/v1/jeu/jouer/:id', () => {
  // plusieurs appels à jouer (pour valider la somme aléatoire)
  for (let i = 0; i < 20; i++) {
    it(`devrait répondre avec un appel réussi pour le joueur existant ${testNom1} et les valeurs appropriées`, async () => {
      const response = await axios.get(`http://localhost:${port}/api/v1/jeu/jouer/${testNom1}`);
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe("application/json; charset=utf-8");
      const resultat = JSON.parse(response.data.resultat);
      expect(resultat.lancers).toBe(i + 1);
      expect(resultat.v1).toBeGreaterThanOrEqual(1);
      expect(resultat.v1).toBeLessThanOrEqual(6);
      expect(resultat.v2).toBeGreaterThanOrEqual(1);
      expect(resultat.v2).toBeLessThanOrEqual(6);
      expect(resultat.somme).toBe(resultat.v1 + resultat.v2);
      expect(resultat.nom).toBe(testNom1);
    });
  }

  it(`devrait répondre avec une mauvaise demande lorsque le joueur n'est pas initialisé ${testNom2}`, async () => {
    try {
      // provoquer une exception, car joueur n'existe pas
      const response = await axios.get(`http://localhost:${port}/api/v1/jeu/jouer/${testNom2}`);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.headers['content-type']).toBe("application/json; charset=utf-8");
      expect(error.response.data.error).toContain(`Joueur '${testNom2}' n'existe pas`);
    }
  });
});