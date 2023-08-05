let images = document.querySelectorAll(".img");
console.log(images);
let jogada;
let jogadaPC;
let botao = document.querySelector("#btn")

function ClearSelectClass() {
    images.forEach((elemento,index)=>{
        elemento.classList.remove("selected")
    })
}


images.forEach((elemento,index) => {

    elemento.classList.remove("selected")
    
    elemento.addEventListener("click",()=>{
        ClearSelectClass()
        elemento.classList.add("selected")
        jogada = elemento.name;
        console.log(jogada);
    })
})

function TranformNumberInOption(RadomNumber) {
    if(RadomNumber === 1){
        return "pedra";
    }else if(RadomNumber === 2){
        return "tesoura";
    }else{
        return "papel";
    }
} 

botao.addEventListener("click",()=>{
    jogadaPC =TranformNumberInOption( Math.floor(Math.random() * 3) + 1);
    console.log(jogadaPC);

})




