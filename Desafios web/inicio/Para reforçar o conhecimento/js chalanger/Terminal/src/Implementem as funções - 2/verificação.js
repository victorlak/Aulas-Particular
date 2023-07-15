let terminal = require("prompt-sync")();



let arrayNomesAdms = [ "pedro","carlos","joao","mateus"];

let ListaDeUsuarios = [ "carlos", "fabricio", "jean","marco","pedro"]


//Essa função deve receber uma lista e destacar os usuarios que são adm dessa lista; Veja por exemplo o funcionamento dessa função com a ListaDeUsuarios

/*
destaqueAdms(ListaDeUsuarios);

Retorno esperado:

carlos - ADM
fabricio - usuario
jean - usuario
marco - usuario
pedro - ADM


A Lista deve conter esse formato respeitando ate os espaços pois será realizado um teste automatizado
*/
function destaqueAdms(lista){

}


//Essa função deve receber uma lista e retonar outra contendo apenas os usuarios , sem os adms

/*
separeUsuarios(ListaDeUsuarios);
retorno esperado:
type  array;

let usuarios = [ fabricio , jean , marco , pedro]


*/
function separeUsuarios(lista){
    
}


module.exports = {separeUsuarios, destaqueAdms}





