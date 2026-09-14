function adicionar(evento){
    evento.preventDefault()

    if(evento.target[0].value === "" || evento.target[1].value === ""){
        alert("Cabaço")
        return;
    }

    const produto = "Produto: " + evento.target[0].value;
    const quantidade = "Qtd: " + evento.target[1].value;

    const li = document.createElement("li");
    li.textContent = produto + " - " + quantidade;

    li.addEventListener('click', () => remover(li))

    const ul = document.querySelector(".container");
    
    ul.appendChild(li);

    evento.target[0].value = "";
    evento.target[1].value = "";

}

function remover(elemento){
    elemento.remove();
}