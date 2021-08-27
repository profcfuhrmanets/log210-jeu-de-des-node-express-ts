import 'jest-extended';
import { JeuDeDes } from '../../src/core/JeuDeDes';

describe('JeuDeDesTest', () => {
  let controller: JeuDeDes;
  beforeEach(async () => {
    controller = new JeuDeDes();
  });

  it('demarrerJeux', async () => {
    const result = controller.demarrerJeu('yvan');
    expect(result).toEqual("{\"nom\":\"yvan\",\"lancers\":0,\"lancersGagnes\":0}");

    expect(() => { controller.demarrerJeu('yvan') }).toThrow("Joueur 'yvan' existe déjà.");

    const resultat = controller.jouer('yvan');
    expect(JSON.parse(resultat).lancers).toEqual(1);

    controller.brasser();
    expect(JSON.parse(controller.joueurs)[0].lancers).toEqual(1)
  })

});
