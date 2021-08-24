import supertest from 'supertest';
import 'jest-extended';

import app from '../../src/App';
const request = supertest(app);

import { De } from '../../src/core/De';
import { JeuDeDes } from '../../src/controller/JeuDeDes';

describe('JeuDeDesTest', () => {
  let controller: JeuDeDes;
  beforeEach(async () => {
    controller = new JeuDeDes();
  });
  
  it('demarrerJeux', async () => {
    let result = controller.demarrerJeu('yvan');
    expect(result).toEqual("{\"nom\":\"yvan\",\"lancers\":0,\"lancersGagnes\":0}");

    expect(() => { controller.demarrerJeu('yvan') }).toThrow("Joueur 'yvan' existe déjà.");

    let resultat = controller.jouer('yvan');
    expect(JSON.parse(resultat).lancers).toEqual(1);

    controller.brasser();
    expect(JSON.parse(controller.joueurs)[0].lancers).toEqual(1)
  }) 

});
 