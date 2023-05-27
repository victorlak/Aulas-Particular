let entrada = require("prompt-sync")()


function getNumber(pergunta){
    return Number(entrada(pergunta));
}

function getString(pergunta){
    return String(entrada(pergunta));
}


module.exports = { getNumber , getString }