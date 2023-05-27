let terminal = require("prompt-sync")();



let array = [ 10 , 10 , 10 , 0];


//essa função deve somar todos os elementos do array 

/*
let ExemploArray = [ 2, 2 ,2];

somaArray(ExemploArray);

Saida esperada:
6
*/
function somaArray(lista){
    
let i = 0;
let soma = 0;

while (i < lista.length) {

    soma = soma + lista[i];
 i++;
}
return soma;
}


// Essa funão deve retornar uma lista apenas com os valores pares 

/*
let ExemploArray = [ 2, 3 ,10, 7];

separeOsPares(ExemploArray);

Retorno esperado:
type: array

let retonoDaFunção = [ 2 , 10];

*/
function separeOsPares(lista){

    var i = 0;
    var pares = [];

    while (i < lista.length){
      
        if ( lista[i]% 2 === 0){
         
            pares.push(lista[i])
            
        }
        i++;
    }
   return pares;
}

console.log(separeOsPares([2,1,5,7,6]))

module.exports = {somaArray, separeOsPares};



