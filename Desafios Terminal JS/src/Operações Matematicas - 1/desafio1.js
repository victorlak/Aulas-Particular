let entrada = require("prompt-sync")();
let randomColor = require('randomcolor'); // import the script
let distancia = 0

let number = Number(entrada("Informe um número(<0 ou >0): "))

function divisivel3(number){
if(number%3 === 0){
    console.log("É divisível")
}else{
    console.log("Não é divisível")
}
}
function negativoOuPositivo(number){
if( number > 0){
    console.log("É positivo")
} else {
    console.log("É negativo")
}
}
function imparOuPar(number){
if( number % 2 === 0){
    console.log("É Par")
} else{
    console.log("É ímpar")
}
}

function distance(number){
    distancia = 100 - number
    console.log(distancia)
}

divisivel3(number)
negativoOuPositivo(number)
imparOuPar(number)
distance(number)

