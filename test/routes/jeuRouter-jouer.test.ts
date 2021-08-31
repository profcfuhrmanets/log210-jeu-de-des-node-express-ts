import supertest from 'supertest';
import 'jest-extended';
import app from '../../src/App';

const request = supertest(app);

const testNom1 = 'Jean-Marc';
const testNom2 = 'Pierre';

beforeAll(async () => {
    await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
});

describe('GET /api/v1/jeu/jouer/:id', () => {
    // plusieurs appels à jouer (pour valider la somme aléatoire)
    for (let i = 0; i < 20; i++) {
        it(`devrait répondre avec un appel réussi pour le joueur existant ${testNom1} et les valeurs appropriées`, async () => {
            const response = await request.get('/api/v1/jeu/jouer/' + testNom1);
            const resultat = JSON.parse(response.body.resultat);
            expect(response.status).toBe(200);
            expect(response.type).toBe("application/json");
            expect(resultat.lancers).toBe(i + 1);
            expect(resultat.v1).toBeWithin(1, 7);
            expect(resultat.v2).toBeWithin(1, 7);
            expect(resultat.somme).toBe(resultat.v1 + resultat.v2);
            expect(resultat.nom).toBe(testNom1);
        });
    }

    it(`devrait répondre avec une mauvaise demande lorsque le joueur n'est pas initialisé ${testNom2}`, async () => {
        const response = await request.get('/api/v1/jeu/jouer/' + testNom2);
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude("n'existe pas");
        expect(response.body.error).toInclude(testNom2);
    });
});