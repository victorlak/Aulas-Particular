let terminal = require("prompt-sync")();



let arrayNomesAdms = [ "pedro","carlos","joao","mateus"];

let ListaDeUsuarios = [ "carlos", "fabricio", "jean","marco","pedro"]


//Essa função deve receber uma lista e destacar os usuarios que são adm dessa lista; Veja por exemplo o funcionamento dessa função com a ListaDeUsuarios

/*
destaqueAdms(ListaDeUsuarios);

Saida esperada:

carlos - ADM
fabricio - usuario
jean - usuario
marco - usuario
pedro - ADM
*/
function destaqueAdms(lista){
    let i = 0;
    let msg ="";
    while (i < lista.length){

        if(arrayNomesAdms.includes(lista[i])){
            msg = msg + `${lista[i]} - ADM\n`;
        }else{
            msg = msg + `${lista[i]} - usuario\n`;
        }
       i++; 
    }
    return msg;
}



//Essa função deve receber uma lista e retonar outra contendo apenas os usuarios , sem os adms

/*
separeUsuarios(ListaDeUsuarios);
retorno esperado:
type  array;

let usuarios = [ fabricio , jean , marco ]


*/
function separeUsuarios(lista){
let i = 0;
let somenteUsuarios = [];
    while (i < lista.length){

        if(!arrayNomesAdms.includes(lista[i])){
            
         somenteUsuarios.push(lista[i]);
        }
       i++; 
    }
   return somenteUsuarios;
}
console.log(separeUsuarios(ListaDeUsuarios));

module.exports = {separeUsuarios, destaqueAdms}





