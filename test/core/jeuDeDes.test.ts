import 'jest-extended';
import { JeuDeDes } from '../../src/core/JeuDeDes';

describe('JeuDeDesTest', () => {
  let jdd: JeuDeDes;
  beforeEach(async () => {
    jdd = new JeuDeDes();
  });

  it(`devrait n'avoir aucun joueur au début`, async () => {
    expect(jdd.joueurs).toEqual("[]")
  })

  it('devrait retourner une valeur entre 2 et 12', () => {
    for (let i = 0; i < 200; i++) {
      expect(jdd.brasser()).toBeWithin(2, 13);
    }
  })

  it('devrait retourner finalement toutes les valeurs entre 2 et 12', () => {
    const resultats = new Set();
    for (let i = 0; i < 200; i++) {
      resultats.add(jdd.brasser())
    }
    expect(resultats.size).toBe(11);
    for (let i = 1; i < 12; i++) {
      expect(resultats.has(i + 1)).toBeTrue();
    }
    // cas particuliers
    expect(resultats.has(1)).toBeFalse();
    expect(resultats.has(13)).toBeFalse();
  })

});
