const desafio = require('../Implementem as funções - 2/soma');

describe('somaArray', () => {
  test('deve retornar a soma dos elementos do array', () => {
    const lista = [1, 2, 3, 4, 5];
    const resultado = desafio.somaArray(lista);
    expect(resultado).toBe(15);
  });
});

describe('separeOsPares', () => {
    test('deve retornar um array com apenas os pares', () => {
      const lista = [1, 2, 3, 4, 5];
      const resultado = desafio.separeOsPares(lista);
      expect(resultado).toStrictEqual([2,4]);
    });
  });
