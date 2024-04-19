import { JeuDeDes } from '../../src/core/jeuDeDes';
import 'jest-extended';

describe('JeuDeDesTest', () => {
  let jdd: JeuDeDes;
  beforeEach(async () => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, async () => {
    expect(jdd.joueurs).toEqual("[]")
  })

  it('devrait retourner une valeur entre 2 et 12', () => {
    const mockBrasser = jest.spyOn(jdd, 'brasser');
    for (let i = 2; i <= 12; i++) {
      mockBrasser.mockImplementation(() => i); // forcer une valeur non-aléatoire
      expect(jdd.brasser()).toBeWithin(2, 13);
    }
    mockBrasser.mockRestore();
  })

  it('devrait retourner finalement toutes les valeurs entre 2 et 12', () => {
    const resultats = new Set();
    const mockBrasser = jest.spyOn(jdd, 'brasser');

    for (let i = 2; i <= 12; i++) {
      mockBrasser.mockImplementation(() => i); // forcer une valeur non-aléatoire
      resultats.add(jdd.brasser())
    }
    mockBrasser.mockRestore();

    expect(resultats.size).toBe(11);

    for (let i = 1; i < 12; i++) {
      expect(resultats.has(i + 1)).toBeTrue();
    }
    // cas particuliers
    expect(resultats.has(1)).toBeFalsy();
    expect(resultats.has(13)).toBeFalsy();
  })

});
