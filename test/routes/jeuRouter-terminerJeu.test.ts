import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/App';

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
});

describe('GET /api/v1/jeu/terminerJeu/:id', () => {
    it(`devrait répondre avec une mauvaise demande lorsque le joueur n'existe pas ${testNom2}`, async () => {
        const response = await request.get('/api/v1/jeu/terminerJeu/' + testNom2);
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude("n'existe pas");
        expect(response.body.error).toInclude(testNom2);
    });

    it(`devrait répondre avec un appel réussi pour le joueur ${testNom1}`, async () => {
        const response = await request.get('/api/v1/jeu/terminerJeu/' + testNom1);
        const resultat = JSON.parse(response.body.resultat);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(resultat.nom).toBe(testNom1);
    });

});