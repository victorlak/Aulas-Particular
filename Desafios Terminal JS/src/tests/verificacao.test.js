const desafio = require('../Implementem as funções - 2/verificação');

describe('somaArray', () => {
  test('deve conter uma lista informando quem é adm e quem não é', () => {
    const lista = ["pedro"];
    const resultado = desafio.destaqueAdms(lista);
    let resolved = "pedro - ADM\n"
    expect(resultado).toBe(resolved);
  });
});

describe('separeOsUsuarios', () => {
    test('deve retornar um array com os usuarios', () => {
        const lista = ["pedro","fabricio"];
        const resultado = desafio.separeUsuarios(lista);
        let resolved = ["fabricio"]
        expect(resultado).toStrictEqual(resolved);
    });
  });
