

const lista = document.querySelector("#lista");
const btn = document.querySelector("#btn");
const btnDelete = document.querySelector("#delete");



loadProdutos();

function loadProdutos() {
    if (!localStorage.getItem("produtos")) {
        localStorage.setItem("produtos", JSON.stringify([]))
        return;
    }

   let produtosList =JSON.parse(localStorage.getItem("produtos"));

   produtosList.forEach(produto => {
        let newItem = createElement(produto.nome,produto.valor);
        injectElement(newItem);
   });

}

function createElement(productName,productValue){
    const li = document.createElement('li');
    li.classList.add("produto")
    li.textContent = `nome: ${productName} //preço: $${productValue}`;
    return li;
}

function injectElement(li){
    lista.appendChild(li);
}

function saveProduct(nome,valor){
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    produtos.push({nome,valor});
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

btn.addEventListener("click", () => {
    const productName = document.querySelector("#nome").value;
    const productValue = Number(document.querySelector("#valor").value);
    const newItem = createElement(productName, productValue);
    injectElement(newItem);
    saveProduct(productName,productValue)
})

function clearLocalStorage(){
    localStorage.removeItem("produtos");
}

function clearList(){
    let produtosNaLista = document.querySelectorAll(".produto");
    
    produtosNaLista.forEach(produto => {
        lista.removeChild(produto)
    })

    clearLocalStorage();
}

btnDelete.addEventListener("click", () => {
    clearList()

})