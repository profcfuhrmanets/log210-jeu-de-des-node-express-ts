import supertest from 'supertest';
import 'jest-extended';

import app from '../../src/App';
const request = supertest(app);

import { De } from '../../src/core/De';

describe('De', () => {

  it('brasser', async () => {
    let de: De = new De();
    let valeur1 = de.valeur;
    de.brasser();
    let valeur2 = de.valeur;
    de.brasser();
    let valeur3 = de.valeur;
    
    let result = valeur1 == valeur2 && valeur2 == valeur3 && valeur1 == valeur3;
    expect(result).toBe(false);

  });

});
 