let images = document.querySelectorAll(".img");
console.log(images);

let jogada = {};
let jogadaPC = {};
let botao = document.querySelector("#btn")

function ClearSelectClass() {
    images.forEach((elemento,index)=>{
        elemento.classList.remove("selected")
    })
}

function getNameJogada(RadomNumber){
    if(RadomNumber === 1){
        return "pedra";
    }else if(RadomNumber === 2){
        return "tesoura";
    }else{
        return "papel";
    }

}

function TranformNumberInOption(RadomNumber) {
    let = jogadaName = getNameJogada(RadomNumber);

    images.forEach((image,index) => {
        if (jogadaName === image.name) {
            jogadaPC.name = image.name;
            jogadaPC.image = image.src;
        }
    })


} 

images.forEach((image,index) => {

    image.classList.remove("selected")
    
    image.addEventListener("click",()=>{
        ClearSelectClass()
        image.classList.add("selected")
        jogada.name = image.name;
        jogada.image = image.src;
        
    })
})


botao.addEventListener("click",()=>{
   TranformNumberInOption( Math.floor(Math.random() * 3) + 1);

   console.log(jogadaPC);
   console.log(jogada);
    

})




