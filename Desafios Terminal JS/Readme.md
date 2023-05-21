# Introdução ao JavaScript

O JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Foi criado em 1995 por Brendan Eich e tem como objetivo adicionar interatividade e dinamismo às páginas da web.

# Declaração de Variáveis
- let: Permite a declaração de uma variável com possibilidade de alteração de valor.
- const: Permite a declaração de uma variável com valor constante, que não pode ser alterado.
### Tipos de Dados e Saída no Console
O JavaScript suporta diferentes tipos de dados, incluindo números, strings, booleanos, arrays, objetos, entre outros. Podemos exibir mensagens no console usando a função **console.log()**.

 ```javascript
let nome = "pedro"
console.log(nome)

//Saída: "pedro"

 ```

## Declaração de Funções
>Existem duas formas comuns de declarar funções em JavaScript:

- A forma tradicional, usando a palavra-chave **function**.
- Arrow functions, que são uma sintaxe mais curta e concisa para declarar funções.

```javascript
//Maneira tradicional, usando a palavra-chave function
function myFunction(params) {
    return retorno;
}

//Arrow function 
const myFunction = (params) => {
    return retorno;
}
```

## Listas (Arrays) e Objetos
Em JavaScript, podemos armazenar coleções de dados em arrays e objetos, permitindo o armazenamento e manipulação de múltiplos valores.

```javascript
 let nomes = ["pedro", "joao", "marcos"]
 let idades = [10, 31 , 22];

//acessando o index 0 do array nome
console.log(nomes[0]);
//Saída: "pedro";

//acessando o index 1 do array nome
console.log(idades[1]);
//Saída: 31;


/*
    Objetos são conjutos de infromações guadados por uma sintaxe de chave : valor
*/

let pessoa = {
    nome: "pedro",
    idade: 20,
    filmesFavoritos: ["Vingadores","Avatar","A espera de um milagre"],
    endereco: {
        cep: 36170000
        uf:"Mg"
    }
}

/*
Para acessar informações desse objeto pessoa basta chama-lo e adcionar . passando suas chaves
*/
//exibir o nome da pessoa
console.log(pessoa.nome);

//exibir o estado que a pessoa está
console.log(pessoa.endereco.uf)

//exibir o primeiro filme favorito citado 
console.log(pessoa.filmesFavoritos[0])
//o segundo
console.log(pessoa.filmesFavoritos[1])


```

## Métodos Úteis
JavaScript fornece diversos métodos úteis para manipulação de strings, arrays, objetos e outros tipos de dados. Por exemplo, o método includes() verifica se um elemento está presente em um array.

- includes() - verificar se um elemento está presente em um array
- length - verifica a quantidade de elementos em um array
- typeof - verificar o tipo de um elemento
- push() - adcionar um elemento em um array
...Existem varios
```javascript
let nomes = ["pedro", "joao", "marcos"];
console.log(nomes.length)
// Saída: 3

//exibir todos os nomes com a propriedade length
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

nomes.push("Vitor")
// nomes = ["pedro" ,"joao","marcos","Vitor"]

//typeof esse serve para dizer o tipo de um elemento
let nome = "pedro"
console.log(typeof nome)
//Saída: String

let idade = 20
console.log(typeof idade)
//Saída: Number

//includes exibie se um elemento está ou não dentro de um array
//Exercicios de exemplo : Verificar se a palavra possui vogais: a , e ,i ,o ,u

let vogais = ["a","e","i","o","u"];
let palavra = "pedro"
/* length lembrando que posso aplicar algumas funções de array em strings para agir como se fosse um array de caracteres*/
let quantidadeDeLetrasPalavra = palavra.length 

for (let i = 0; i < quantidadeDeLetrasPalavra ; i++) {
  if(vogais.includes(palavra[i])){
    /*
    perceba que estou perguntado se a letra que esta sendo passada nessa rodada está presente no array vogais
    */
    console.log("possui vogal")

  }else {

    console.log("nao possui vogal")
  }
}


```
