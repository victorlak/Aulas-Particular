
let entrada = require("prompt-sync")();


/*# Desafio de Sorteio - Cadastro e Votação em JavaScript

Você é desafiado a criar um programa em JavaScript que permita realizar um sorteio para um determinado prêmio. O programa deve funcionar em fases, começando pelo cadastro de participantes. Para isso, o programa deve apresentar um menu com as seguintes opções:

1-Cadastro de participantes
2-Avançar para votação

Se a opção 1 for selecionada, o programa deve solicitar o nome e um número de 0 a 100 do participante. Caso um número superior ou inferior ao permitido seja inserido, o programa deve exibir uma mensagem de erro e solicitar novamente a inserção do número. Após fornecer o nome e o número, o programa deve retornar ao menu de cadastro de participantes, permitindo cadastrar vários participantes até que a opção 2 seja selecionada.

Se outra opção, como 3 ou qualquer número inválido, for selecionada, o programa deve exibir uma mensagem de erro e solicitar novamente a opção desejada.

Quando a opção 2 for selecionada, o sistema deve gerar um número aleatório de 0 a 100. Em seguida, o programa deve verificar se algum participante cadastrado anteriormente escolheu esse número. Caso positivo, o sistema deve exibir a seguinte mensagem:

"NUMERO SORTEADO: {número} -- Ganhador: {participante que ganhou}"

Se nenhum participante n ganhar o sorteio, o programa deve exibir a seguinte mensagem:

"Nenhum ganhador: {número sorteado}, {lista com nome e número de cada participante}"

Agora é com você! Boa sorte no desenvolvimento do programa e divirta-se com o desafio!*/

let opcao = 0;
let nome = 0;
let numero = 0;
let participante = {};
let participantesSorteio = [];

function cadastro(participante){

    participantesSorteio.push(participante);
}

while(opcao  !== 2){


    console.log("1_Adicionar participan\n2_Realizar sorteio\n")
    opcao = Number(entrada(""));


    if(opcao == 1){
        nome = entrada("Informe seu nome:");
        numero = Number(entrada("Informe seu numero:"));
        

        participante = {
            nome,
            numero,
        }

        cadastro(participante);

    }else if(opcao !== 2){

        console.log("Opção inválida, escolha novamente:\n");
    }

    }
    let numeroAleatorio = Math.floor(Math.random() * 101);
    //let numeroAleatorio = 10;
    let i = 0;
    let ganhador;

    while(i < participantesSorteio.length){

        if(participantesSorteio[i].numero === numeroAleatorio){

            ganhador = participantesSorteio[i];
        }
        i++;
    }

    if(ganhador === undefined){

        console.log("Não tivemos ganhador :(");
        console.log(`Número sorteado: ${numeroAleatorio}`);
    }else{
        console.log(`Vencedor do sorteio :${ganhador.nome},${ganhador.numero}`)
    }
