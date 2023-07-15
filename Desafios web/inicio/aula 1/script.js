let btn = document.querySelector('#btn')
let nomes = document.querySelectorAll('.pessoa')


btn.addEventListener('click',() => {
let input = document.querySelector('#input')
let nameInput = input.value
let i = 0;
let qtn = nomes.length

while(i < qtn) {
    if (nomes[i].textContent.toLocaleUpperCase() === nameInput.toLocaleUpperCase()) {
        nomes[i].style.color = 'red'
    }else{
        nomes[i].style.color = 'black'
    }
    i++;
}


})
