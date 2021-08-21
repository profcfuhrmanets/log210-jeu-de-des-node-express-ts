import supertest from 'supertest';
import 'jest-extended';
import app from '../src/App';

const request = supertest(app);

let testNom1 = 'Jean-Marc';
let testNom2 = 'Pierre';

describe('GET /api/v1/jeu/demarrerJeu/:id', () => {

    it('responds with successful first call for player', async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });
        expect(response.status).toBe(201);
        expect(response.type).toBe("application/json");
        expect(response.body.joueur.nom).toBe(testNom1);
        expect(response.body.joueur.lancers).toBe(0);
        expect(response.body.joueur.lancersGagnes).toBe(0);
    });

    it('duplicate call for player responds with bad request', async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: testNom1 });

        expect(response.status).toBe(400);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude('existe déjà');
    });

    it('missing name parameter responds with bad request', async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({});

        expect(response.status).toBe(400);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude('Le paramètre nom est absent');
    });

    it('empty name parameter responds with bad request', async () => {
        const response = await request.post('/api/v1/jeu/demarrerJeu').send({ nom: "   \t" });

        expect(response.status).toBe(400);
        expect(response.type).toBe("application/json");
        expect(response.body.error).toInclude('Le nom ne peut pas être vide');
    });

});