let botao = document.querySelector("#btn")

botao.addEventListener("click", ()=>{
    let input1 = Number(document.querySelector("#ip1").value)
    let input2 = Number(document.querySelector("#ip2").value)
    let soma = input1 + input2;
    
    let resultado = document.querySelector("#result")

    resultado.textContent = soma

})


