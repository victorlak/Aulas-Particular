
let input = document.querySelector("#pesquisa")

input.addEventListener("keyup", ()=>{
    let lista = document.querySelectorAll(".movie")
    let tam = lista.length
    
    for(let i = 0; i < tam; i++){
        let nameUpperCase = lista[i].textContent.toUpperCase()
        if(nameUpperCase.includes(input.value.toUpperCase())){ 
            lista[i].style.display = "block"
        }else{
            lista[i].style.display = "none"
        }
    }
})